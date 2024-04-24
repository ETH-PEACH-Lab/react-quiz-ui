import { type ICode } from '../../../src-object';
import type IExerciseObject from '../../types/IExerciseObject';
import { type ICodingMetadata } from './ICodingMetadata';

export interface ICodingExercise extends IExerciseObject {
  startingCode?: ICode;
  metadata?: ICodingMetadata;
  type: 'coding-exercise';
}
