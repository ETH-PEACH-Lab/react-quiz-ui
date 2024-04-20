import IExerciseObject from "./IExerciseObject";
import IExerciseReference from "./IExerciseReference";

export type ExerciseProps = {
    exerciseObject: IExerciseObject,
    initialAnswer?: IExerciseReference
    onAnswerChanges: (answer: IExerciseReference) => void;
}