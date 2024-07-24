import { editor } from 'monaco-editor';

export declare const onCodeEditorMount: (editor: editor.ICodeEditor, focused?: boolean) => void;
export declare const onDiffEditorMount: (editor: editor.IDiffEditor, focused?: boolean) => void;
export declare const updateCodeEditorHeight: (editor: editor.ICodeEditor) => void;
export declare const updateDiffCodeEditorHeight: (editor: editor.IDiffEditor) => void;
export declare const adjustableHeightCodeOptions: editor.IStandaloneEditorConstructionOptions | editor.IStandaloneDiffEditorConstructionOptions;
export declare const readonlyAdjustableHeightCodeOptions: editor.IStandaloneEditorConstructionOptions | editor.IStandaloneDiffEditorConstructionOptions;
