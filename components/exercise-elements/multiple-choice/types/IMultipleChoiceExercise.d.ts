import { default as IExerciseObject } from '../../types/IExerciseObject';
import { IMultipleChoiceItem } from '../item';
import { IMultipleChoiceMetadata } from './IMultipleChoiceMetadata';

export interface IMultipleChoiceExercise extends IExerciseObject {
    items: IMultipleChoiceItem[];
    correctAnswers: string[];
    metadata?: IMultipleChoiceMetadata;
}
