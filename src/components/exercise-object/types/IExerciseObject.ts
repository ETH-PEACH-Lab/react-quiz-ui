import { ISrcObject } from "../../src-object";
import IMetadata from "./IMetadata";

export default interface IExerciseObject{
    description: ISrcObject
    metadata?: IMetadata
}