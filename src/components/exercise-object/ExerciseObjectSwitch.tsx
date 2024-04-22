import React from "react";
import { type ExerciseProps } from "./types";
import type IExerciseObject from "./types/IExerciseObject";
import type IExerciseAnswer from "./types/IExerciseAnswer";
import ExerciseComponentRegistry from "./ExerciseComponentRegistry";
import TextResponseComponent from "./text-response/TextResponseComponent";
import MultipleChoiceComponent from "./multiple-choice/MultipleChoiceComponent";
import CodingComponent from "./coding/CodingComponent";

ExerciseComponentRegistry.registerExerciseComponent(
  "text-response-exercise",
  TextResponseComponent,
);
ExerciseComponentRegistry.registerExerciseComponent(
  "multiple-choice-exercise",
  MultipleChoiceComponent,
);
ExerciseComponentRegistry.registerExerciseComponent(
  "coding-exercise",
  CodingComponent,
);

const ExerciseObjectSwitch: React.FC<
  Required<ExerciseProps<IExerciseObject, IExerciseAnswer>>
> = (props: Required<ExerciseProps<IExerciseObject, IExerciseAnswer>>) => {
  const ExerciseComponent = ExerciseComponentRegistry.getExerciseComponent(
    props.exerciseObject.type,
  );
  if (ExerciseComponent !== undefined) {
    return <ExerciseComponent {...props}></ExerciseComponent>;
  }
  return <>Could not find Component with type: {props.exerciseObject.type}</>;
};

export default ExerciseObjectSwitch;
