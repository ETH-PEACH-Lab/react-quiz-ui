import { type ITypedObject } from '../../../types'
import { type IMarkdown } from '../../src-object'
import type IMetadata from './IMetadata'

export default interface IExerciseObject extends ITypedObject {
  description: IMarkdown
  metadata?: IMetadata
}
