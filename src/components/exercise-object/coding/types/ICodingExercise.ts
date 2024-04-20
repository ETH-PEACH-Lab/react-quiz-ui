import { type ICode } from '../../../src-object'
import type IExerciseObject from '../../types/IExerciseObject'

export interface ICodingExercise extends IExerciseObject {
  startingCode: ICode
  assertCode: ICode[]
}
