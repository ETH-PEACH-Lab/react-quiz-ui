import IExerciseObject from "./IExerciseObject";
import IExerciseAnswer from "./IExerciseAnswer";

export type ExerciseProps = {
    exerciseObject: IExerciseObject,
    onAnswerChanges: (answer: IExerciseAnswer) => void;
}