import type IExerciseObject from '../../types/IExerciseObject';
import { type IMultipleChoiceItem } from '../item';
import { type IMultipleChoiceMetadata } from './IMultipleChoiceMetadata';

export interface IMultipleChoiceExercise extends IExerciseObject {
  items: IMultipleChoiceItem[];
  metadata?: IMultipleChoiceMetadata;
}
