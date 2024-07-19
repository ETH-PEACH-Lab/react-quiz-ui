import React, { useEffect, useId, useMemo, useState } from 'react';
import { MultipleChoiceItemComponent } from './item/MultipleChoiceItemComponent';
import useArrayShuffle from '../../../hooks/useArrayShuffle';
import { type ExerciseProps } from '../types';
import type { IMultipleChoiceExercise } from './types/IMultipleChoiceExercise';
import type { IMultipleChoiceAnswer } from './types/IMultipleChoiceAnswer';
import { type IMultipleChoiceItem } from './item';

export const MultipleChoiceComponent: React.FC<
  ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>
> = ({
  exerciseObject,
  initialAnswer,
  onAnswerChanges,
}: ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>) => {
  const internalId = useId();
  const [shuffledItems, setShuffledItems] = useState<IMultipleChoiceItem[]>(
    exerciseObject.items,
  );
  const mc = exerciseObject;
  const [selectedItems, setItemsAnswers] = useState<string[]>(
    initialAnswer?.answer ?? [],
  );
  useEffect(() => {
    setItemsAnswers(initialAnswer?.answer ?? []);
  }, [initialAnswer?.answer]);

  useEffect(() => {
    setShuffledItems(
      exerciseObject.metadata?.random
        ? useArrayShuffle(exerciseObject.items)
        : exerciseObject.items,
    );
  }, [exerciseObject.items.length, exerciseObject.metadata?.random]);

  const incorrectAnswers = useMemo(
    () =>
      selectedItems
        .filter((item) => !mc.correctAnswers.includes(item))
        .concat(
          mc.correctAnswers.filter((item) => !selectedItems.includes(item)),
        ),
    [mc.correctAnswers, selectedItems],
  );

  useEffect(() => {
    onAnswerChanges({ ...initialAnswer, answer: selectedItems });
  }, [selectedItems, onAnswerChanges]);

  const onMultipleChoiceItemChange: (id: string, checked: boolean) => void = (
    id: string,
    checked: boolean,
  ) => {
    if (!mc.metadata?.multi) {
      setItemsAnswers([id]);
      return;
    }
    if (!checked) {
      setItemsAnswers(selectedItems.filter((item) => item !== id));
      return;
    }
    setItemsAnswers([...selectedItems, id]);
  };

  const isIncorrect: (item: IMultipleChoiceItem) => boolean = (
    item: IMultipleChoiceItem,
  ) => {
    return mc.correctAnswers.length > 0 && incorrectAnswers.includes(item.id);
  };

  const itemComponents = (mc.metadata?.random ? shuffledItems : mc.items).map(
    (item) => (
      <MultipleChoiceItemComponent
        onChange={onMultipleChoiceItemChange}
        key={internalId + '_' + item.id}
        parentId={internalId}
        item={item}
        config={{
          multi: mc.metadata?.multi,
          incorrectSelection: isIncorrect(item),
          disabled: mc.metadata?.disabled,
          checked: selectedItems.includes(item.id),
          markdownConfig: mc.metadata?.markdownConfig,
          coloring: mc.metadata?.multipleChoiceItemColoring,
          showEvaluation: mc.metadata?.showEvaluation,
          showIndicator: mc.metadata?.showIndicator,
          distribution: {
            show: mc.metadata?.distribution?.show,
            number: mc.metadata?.distribution?.perItem[item.id] ?? 0,
          },
          valid: mc.correctAnswers.includes(item.id),
        }}
      />
    ),
  );

  return <>{itemComponents}</>;
};
