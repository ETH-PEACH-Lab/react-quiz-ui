import { type IMarkdown } from '../../../src-elements';
import type IExerciseAnswer from '../../types/IExerciseAnswer';

export default interface ITextResponseAnswer extends IExerciseAnswer {
  answer: IMarkdown;
}
