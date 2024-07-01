import { ICodeObject } from '../../../src-elements';
import { default as IExerciseObject } from '../../types/IExerciseObject';
import { ICodingMetadata } from './ICodingMetadata';

export interface ICodingExercise extends IExerciseObject {
    startingCode?: ICodeObject;
    metadata?: ICodingMetadata;
}
