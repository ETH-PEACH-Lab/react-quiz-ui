import React, { useEffect, useId, useMemo, useState } from 'react';
import { MultipleChoiceItemComponent } from './item/MultipleChoiceItemComponent';
import useArrayShuffle from '../../../hooks/useArrayShuffle';
import { type ExerciseProps } from '../types';
import type { IMultipleChoiceExercise } from './types/IMultipleChoiceExercise';
import type { IMultipleChoiceAnswer } from './types/IMultipleChoiceAnswer';
import { type IMultipleChoiceItem } from './item';

export const MultipleChoiceComponent: React.FC<
  ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>
> = (props: ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>) => {
  const internalId = useId();
  const mc = props.exerciseObject;
  const [selectedItems, setItemsAnswers] = useState<string[]>(
    props.initialAnswer?.answer ?? [],
  );
  useEffect(() => {
    setItemsAnswers(props.initialAnswer?.answer ?? []);
  }, [props.initialAnswer?.answer]);

  const items = useMemo(() => {
    return mc.metadata?.random ? useArrayShuffle(mc.items) : mc.items;
  }, [
    props.exerciseObject.metadata?.random,
    props.exerciseObject.items.length,
  ]);

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
    props.onAnswerChanges({ ...props.initialAnswer, answer: selectedItems });
  }, [selectedItems, props.onAnswerChanges]);

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

  const itemComponents = items.map((item) => (
    <MultipleChoiceItemComponent
      onChange={onMultipleChoiceItemChange}
      key={internalId + '_' + item.id}
      parentId={internalId}
      item={item}
      config={{
        multi: mc.metadata?.multi,
        incorrect: isIncorrect(item),
        disabled: mc.metadata?.disabled,
        checked: selectedItems.includes(item.id),
        markdownConfig: mc.metadata?.markdownConfig,
        coloring: mc.metadata?.multipleChoiceItemColoring,
        showEvaluation: mc.metadata?.showEvaluation,
        showIndicator: mc.metadata?.showIndicator,
      }}
    />
  ));

  return <>{itemComponents}</>;
};
MultipleChoiceComponent.defaultProps = {
  initialAnswer: {
    answer: [],
  },
};
