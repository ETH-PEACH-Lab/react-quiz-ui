import { ICodingMetadata } from './ICodingMetadata';
import { default as IExerciseObject } from '../../types/IExerciseObject';
import { ICodeObject } from '../../../src-elements';

export interface ICodingExercise extends IExerciseObject {
    startingCode?: ICodeObject;
    metadata?: ICodingMetadata;
}
