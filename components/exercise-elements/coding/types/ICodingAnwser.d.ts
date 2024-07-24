import { default as IExerciseAnswer } from '../../types/IExerciseAnswer';
import { ICodeObject } from '../../../src-elements';

export interface ICodingAnswer extends IExerciseAnswer {
    answer: ICodeObject;
}
