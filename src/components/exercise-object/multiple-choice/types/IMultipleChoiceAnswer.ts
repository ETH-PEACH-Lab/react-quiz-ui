import IExerciseReference from "../../types/IExerciseReference";

export default interface IMultipleChoiceAnswer extends IExerciseReference{
    answer: string[]
}