import IExerciseObject from "../../types/IExerciseObject"
import { ITextResponseMetadata } from "./ITextResponseMetadata"

export default interface ITextResponseExercise extends IExerciseObject{
    type: 'text-response'
    metadata: ITextResponseMetadata
}