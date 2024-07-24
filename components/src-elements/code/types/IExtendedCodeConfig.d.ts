import { ICodeConfig } from './ICodeConfig';
import { editor } from 'monaco-editor';

export interface IExtendedCodeConfig extends ICodeConfig {
    actions?: editor.IActionDescriptor[];
}
