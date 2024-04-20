import IExerciseObject from "../../types/IExerciseObject";
import IMultipleChoiceItem from "./IMultipleChoiceItem";
import { IMultipleChoiceMetadata } from "./IMultipleChoiceMetadata";

export default interface IMultipleChoiceExercise extends IExerciseObject{
    type: 'multiple-choice-exercise'
    multi?: boolean
    items: IMultipleChoiceItem[],
    metadata?: IMultipleChoiceMetadata
}