import { type ICode } from '../../../src-elements';
import type IExerciseObject from '../../types/IExerciseObject';
import { type ICodingMetadata } from './ICodingMetadata';

export interface ICodingExercise extends IExerciseObject {
  startingCode?: ICode;
  metadata?: ICodingMetadata;
}
