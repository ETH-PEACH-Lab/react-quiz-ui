import { ITypedObject } from "../../../types";
import { IMarkdown } from "../../src-object";
import IMetadata from "./IMetadata";

export default interface IExerciseObject extends ITypedObject{
    description: IMarkdown
    metadata?: IMetadata
}