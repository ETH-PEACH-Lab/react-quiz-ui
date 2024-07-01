import { default as IExerciseObject } from '../../types/IExerciseObject';
import { ITextResponseMetadata } from './ITextResponseMetadata';

export interface ITextResponseExercise extends IExerciseObject {
    metadata?: ITextResponseMetadata;
}
