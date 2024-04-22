import React, { useEffect, useMemo, useState } from "react";
import type IMultipleChoiceItem from "./types/IMultipleChoiceItem";
import { MarkdownComponent } from "../../src-object";
import MultipleChoiceItemComponent from "./item/MultipleChoiceItemComponent";
import useArrayShuffle from "../../../hooks/useArrayShuffle";
import { type ExerciseProps } from "../types";
import type IMultipleChoiceExercise from "./types/IMultipleChoiceExercise";
import type IMultipleChoiceAnswer from "./types/IMultipleChoiceAnswer";

const MultipleChoiceComponent: React.FC<
  ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>
> = (props: ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>) => {
  const mc = props.exerciseObject;
  const [selectedItems, setItemsAnswers] = useState<string[]>(
    props.initialAnswer?.answer ?? [],
  );

  const items = useMemo(() => {
    return mc.metadata?.random ? useArrayShuffle(mc.items) : mc.items;
  }, [mc.metadata?.random, mc.items]);

  const incorrectAnswers = useMemo(
    () =>
      selectedItems.filter(
        (item) => !mc.metadata?.correctAnswers?.includes(item),
      ),
    [mc.metadata?.correctAnswers, selectedItems],
  );

  useEffect(() => {
    props.onAnswerChanges({ exerciseId: mc.id, answer: selectedItems });
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
    const showResult =
      (mc.metadata?.showEvaluation &&
        mc.metadata.correctAnswers &&
        mc.metadata.correctAnswers.length > 0) ??
      false;
    if (!mc.metadata?.multi) {
      return showResult && incorrectAnswers.length > 0;
    }
    return showResult && incorrectAnswers.includes(item.id);
  };

  const itemComponents = items.map((item) => (
    <MultipleChoiceItemComponent
      onChange={onMultipleChoiceItemChange}
      key={item.id}
      parentId={mc.id}
      item={item}
      config={{
        multi: mc.metadata?.multi,
        incorrect: isIncorrect(item),
        disabled: mc.metadata?.disabled,
        defaultChecked: selectedItems.includes(item.id),
      }}
    />
  ));

  return (
    <>
      <MarkdownComponent {...mc.description}></MarkdownComponent>
      {itemComponents}
    </>
  );
};
MultipleChoiceComponent.defaultProps = {
  initialAnswer: {
    exerciseId: "",
    answer: [],
  },
};
export default MultipleChoiceComponent;
