import { type editor } from 'monaco-editor';

export interface ICodeConfig {
  options?: editor.IStandaloneEditorConstructionOptions;
  fullHeight?: boolean;
  theme?: 'vs-dark' | 'light';
}
