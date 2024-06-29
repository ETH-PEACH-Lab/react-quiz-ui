import { type editor } from 'monaco-editor';
import { type ICodeConfig } from './ICodeConfig';

export interface IExtendedCodeConfig extends ICodeConfig {
  actions?: editor.IActionDescriptor[];
}
