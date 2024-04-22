import { type IMarkdown } from "../../../src-object";
import type IExerciseAnswer from "../../types/IExerciseAnswer";

export default interface ITextResponseAnswer extends IExerciseAnswer {
  answer: IMarkdown;
}
