import type IExerciseObject from '../../types/IExerciseObject';
import type IMultipleChoiceItem from './IMultipleChoiceItem';
import { type IMultipleChoiceMetadata } from './IMultipleChoiceMetadata';

export default interface IMultipleChoiceExercise extends IExerciseObject {
  type: 'multiple-choice-exercise';
  multi?: boolean;
  items: IMultipleChoiceItem[];
  metadata?: IMultipleChoiceMetadata;
}
