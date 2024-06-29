import { type editor } from 'monaco-editor';

export interface ICodeConfig {
  options?:
    | editor.IStandaloneEditorConstructionOptions
    | editor.IDiffEditorConstructionOptions;
  fullHeight?: boolean;
  theme?: 'vs-dark' | 'light';
}
