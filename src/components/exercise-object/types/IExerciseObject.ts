import { type ITypedObject } from '../../../types';
import { type IMarkdown } from '../../src-object';

export default interface IExerciseObject extends ITypedObject {
  description: IMarkdown;
  metadata?: Record<string, any>;
  [key: string]: any;
}
