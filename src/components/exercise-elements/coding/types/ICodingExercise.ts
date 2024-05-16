import { type ICodeObject } from '../../../src-elements';
import type IExerciseObject from '../../types/IExerciseObject';
import { type ICodingMetadata } from './ICodingMetadata';

export interface ICodingExercise extends IExerciseObject {
  startingCode?: ICodeObject;
  metadata?: ICodingMetadata;
}
