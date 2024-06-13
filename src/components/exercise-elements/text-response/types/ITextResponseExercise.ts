import type IExerciseObject from '../../types/IExerciseObject';
import { type ITextResponseMetadata } from './ITextResponseMetadata';

export interface ITextResponseExercise extends IExerciseObject {
  metadata?: ITextResponseMetadata;
  solution?: string;
}
