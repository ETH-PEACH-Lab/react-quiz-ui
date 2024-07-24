import { IMultipleChoiceMetadata } from './IMultipleChoiceMetadata';
import { IMultipleChoiceItem } from '../item';
import { default as IExerciseObject } from '../../types/IExerciseObject';

export interface IMultipleChoiceExercise extends IExerciseObject {
    items: IMultipleChoiceItem[];
    correctAnswers: string[];
    metadata?: IMultipleChoiceMetadata;
}
