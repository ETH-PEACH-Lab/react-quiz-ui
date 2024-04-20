import IExerciseAnswer from "../../types/IExerciseAnswer";

export default interface IMultipleChoiceAnswer extends IExerciseAnswer{
    answer: string[]
}