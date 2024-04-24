import { type ICode } from '../../../src-object';
import type IExerciseAnswer from '../../types/IExerciseAnswer';

export interface ICodingAnswer extends IExerciseAnswer {
  answer: ICode;
}
