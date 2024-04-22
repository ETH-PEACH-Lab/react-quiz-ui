import type IExerciseObject from "../../types/IExerciseObject";
import { type ITextResponseMetadata } from "./ITextResponseMetadata";

export default interface ITextResponseExercise extends IExerciseObject {
  type: "text-response-exercise";
  metadata?: ITextResponseMetadata;
}
