import { DiffEditor, type Monaco } from '@monaco-editor/react';
import React from 'react';
import { type ICodeConfig } from './types';
import {
  adjustableHeightCodeOptions,
  onDiffEditorMount,
  updateDiffCodeEditorHeight,
} from './BaseCodeHelpers';
import { type editor } from 'monaco-editor';

interface DiffCodeComponentProps {
  original: string;
  modified: string;
  language: string;
  focused?: boolean;
  config?: ICodeConfig;
  onMount?: (editor: editor.IStandaloneDiffEditor) => void;
  beforeMount?: (monaco: Monaco) => void;
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
  onMount,
  beforeMount,
}: DiffCodeComponentProps) => {
  const onComponentEditorMount: (
    editor: editor.IStandaloneDiffEditor,
  ) => void = (editor: editor.IStandaloneDiffEditor) => {
    onDiffEditorMount(editor, focused);
    editor.getOriginalEditor().onDidContentSizeChange(() => {
      updateDiffCodeEditorHeight(editor);
    });
    editor.getModifiedEditor().onDidContentSizeChange(() => {
      updateDiffCodeEditorHeight(editor);
    });
    updateDiffCodeEditorHeight(editor);
    onMount && onMount(editor);
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
        beforeMount={beforeMount}
      />
    </div>
  );
};

export default DiffCodeComponent;
