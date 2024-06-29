import { DiffEditor } from '@monaco-editor/react';
import React from 'react';
import { type ICodeConfig } from './types';
import {
  adjustableHeightCodeOptions,
  onEditorMount,
  updateDiffCodeEditorHeight,
} from './BaseCodeHelpers';
import { type editor } from 'monaco-editor';

interface DiffCodeComponentProps {
  original: string;
  modified: string;
  language: string;
  focused?: boolean;
  config?: ICodeConfig;
}
export const DiffCodeComponent: React.FC<DiffCodeComponentProps> = ({
  original,
  modified,
  language,
  focused,
  config = {
    fullHeight: false,
    options: adjustableHeightCodeOptions,
    theme: 'light',
  },
}: DiffCodeComponentProps) => {
  const onComponentEditorMount: (
    editor: editor.IStandaloneDiffEditor,
  ) => void = (editor: editor.IStandaloneDiffEditor) => {
    onEditorMount(editor, focused);
    editor.getOriginalEditor().onDidContentSizeChange(() => {
      console.log('content size change');
      updateDiffCodeEditorHeight(editor);
    });
    editor.getModifiedEditor().onDidContentSizeChange(() => {
      updateDiffCodeEditorHeight(editor);
    });
    updateDiffCodeEditorHeight(editor);
  };
  return (
    <div className="grid grid-cols-1">
      <DiffEditor
        height={config?.fullHeight ? '100%' : 'auto'}
        options={config?.options ?? adjustableHeightCodeOptions}
        theme={config?.theme}
        original={original}
        modified={modified}
        language={language}
        onMount={onComponentEditorMount}
      />
    </div>
  );
};

export default DiffCodeComponent;
