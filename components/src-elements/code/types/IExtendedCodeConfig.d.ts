import { editor } from 'monaco-editor';
import { ICodeConfig } from './ICodeConfig';

export interface IExtendedCodeConfig extends ICodeConfig {
    actions?: editor.IActionDescriptor[];
}
