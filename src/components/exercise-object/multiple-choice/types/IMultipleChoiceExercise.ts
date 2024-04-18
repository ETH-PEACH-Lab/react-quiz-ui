import IExerciseObject from "../../types/IExerciseObject";
import IMultipleChoiceItem from "./IMultipleChoiceItem";

export default interface IMultipleChoiceExercise extends IExerciseObject{
    type: 'multiple-choice-exercise'
    multi?: boolean
    items: IMultipleChoiceItem[]
}