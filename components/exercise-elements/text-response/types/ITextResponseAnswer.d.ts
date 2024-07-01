import { ISrcObject } from '../../../src-elements';
import { default as IExerciseAnswer } from '../../types/IExerciseAnswer';

export interface ITextResponseAnswer extends IExerciseAnswer {
    answer: ISrcObject;
}
