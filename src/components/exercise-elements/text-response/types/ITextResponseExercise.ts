import type IExerciseObject from '../../types/IExerciseObject';
import { type ITextResponseMetadata } from './ITextResponseMetadata';

export default interface ITextResponseExercise extends IExerciseObject {
  metadata?: ITextResponseMetadata;
}
