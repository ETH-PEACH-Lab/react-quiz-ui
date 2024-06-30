import { Editor, type Monaco } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import React from 'react';
import { type IExtendedCodeConfig } from './types/IExtendedCodeConfig';
import {
  adjustableHeightCodeOptions,
  onEditorMount,
  updateCodeEditorHeight,
} from './BaseCodeHelpers';

interface CodeComponentProps {
  src: string;
  language: string;
  onCodeChange?: (value: string) => void;
  focused?: boolean;
  config?: IExtendedCodeConfig;
  onMount?: (editor: editor.IStandaloneCodeEditor) => void;
  beforeMount?: (monaco: Monaco) => void;
}
export const CodeComponent: React.FC<CodeComponentProps> = ({
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
      onCodeChange(value ?? '');
    }
  };
  const onComponentEditorMount: (
    editor: editor.IStandaloneCodeEditor,
  ) => void = (editor: editor.IStandaloneCodeEditor) => {
    onEditorMount(editor, focused);
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
