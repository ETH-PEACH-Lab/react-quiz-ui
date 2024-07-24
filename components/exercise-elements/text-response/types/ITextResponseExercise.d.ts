import { ITextResponseMetadata } from './ITextResponseMetadata';
import { default as IExerciseObject } from '../../types/IExerciseObject';

export interface ITextResponseExercise extends IExerciseObject {
    metadata?: ITextResponseMetadata;
}
