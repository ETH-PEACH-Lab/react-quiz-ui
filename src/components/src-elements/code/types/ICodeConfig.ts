import { type editor } from 'monaco-editor';

export interface ICodeConfig {
  options?: editor.IStandaloneEditorConstructionOptions;
  actions?: editor.IActionDescriptor[];
  fullHeight?: boolean;
  theme?: 'vs-dark' | 'light';
}
