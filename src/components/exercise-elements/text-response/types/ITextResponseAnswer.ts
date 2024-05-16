import { type ISrcObject } from '../../../src-elements';
import type IExerciseAnswer from '../../types/IExerciseAnswer';

export default interface ITextResponseAnswer extends IExerciseAnswer {
  answer: ISrcObject;
}
