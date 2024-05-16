import { type ICode } from '../../../src-elements';
import type IExerciseAnswer from '../../types/IExerciseAnswer';

export interface ICodingAnswer extends IExerciseAnswer {
  answer: ICode;
}
