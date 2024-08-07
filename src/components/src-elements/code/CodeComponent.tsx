import { Editor, type Monaco } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import React from 'react';
import { type IExtendedCodeConfig } from './types/IExtendedCodeConfig';
import {
  adjustableHeightCodeOptions,
  onCodeEditorMount,
  updateCodeEditorHeight,
} from './BaseCodeHelpers';

interface CodeComponentProps {
  referenceId?: string;
  src: string;
  language: string;
  onCodeChange?: (value: string, referenceId?: string) => void;
  focused?: boolean;
  config?: IExtendedCodeConfig;
  onMount?: (editor: editor.IStandaloneCodeEditor) => void;
  beforeMount?: (monaco: Monaco) => void;
}
export const CodeComponent: React.FC<CodeComponentProps> = ({
  referenceId,
  src,
  language,
  onCodeChange,
  focused,
  config = {
    fullHeight: false,
    options: adjustableHeightCodeOptions,
    theme: 'light',
    actions: [],
  },
  onMount,
  beforeMount,
}: CodeComponentProps) => {
  const onChange: (value: string | undefined) => void = (
    value: string | undefined,
  ) => {
    if (onCodeChange) {
      onCodeChange(value ?? '', referenceId);
    }
  };
  const onComponentEditorMount: (
    editor: editor.IStandaloneCodeEditor,
  ) => void = (editor: editor.IStandaloneCodeEditor) => {
    onCodeEditorMount(editor, focused);
    editor.onDidContentSizeChange(() => {
      updateCodeEditorHeight(editor);
    });

    updateCodeEditorHeight(editor);
    if (config?.actions) {
      config.actions.forEach((action) => {
        editor.addAction(action);
      });
    }
    onMount && onMount(editor);
  };
  return (
    <div className="grid grid-cols-1">
      <Editor
        height={config?.fullHeight ? '100%' : 'auto'}
        options={config?.options ?? adjustableHeightCodeOptions}
        theme={config?.theme}
        value={src}
        language={language}
        onChange={onChange}
        onMount={onComponentEditorMount}
        beforeMount={beforeMount}
      />
    </div>
  );
};
