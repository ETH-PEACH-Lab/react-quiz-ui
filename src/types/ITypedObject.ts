import { type IObject } from './IObject';

export interface ITypedObject extends IObject {
  type: string;
}
