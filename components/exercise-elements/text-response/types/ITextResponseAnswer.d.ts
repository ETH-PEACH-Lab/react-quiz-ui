import { default as IExerciseAnswer } from '../../types/IExerciseAnswer';
import { ISrcObject } from '../../../src-elements';

export interface ITextResponseAnswer extends IExerciseAnswer {
    answer: ISrcObject;
}
