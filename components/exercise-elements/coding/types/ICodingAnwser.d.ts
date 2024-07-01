import { ICodeObject } from '../../../src-elements';
import { default as IExerciseAnswer } from '../../types/IExerciseAnswer';

export interface ICodingAnswer extends IExerciseAnswer {
    answer: ICodeObject;
}
