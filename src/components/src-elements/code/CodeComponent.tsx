import { Editor } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import React from 'react';
import { type ICodeConfig } from './types';

interface CodeComponentProps {
  src: string;
  language: string;
  onCodeChange?: (value: string) => void;
  focused?: boolean;
  config?: ICodeConfig;
}
export const CodeComponent: React.FC<CodeComponentProps> = (
  props: CodeComponentProps,
) => {
  const onCodeChange: (value: string | undefined) => void = (
    value: string | undefined,
  ) => {
    if (props.onCodeChange) {
      props.onCodeChange(value ?? '');
    }
  };
  const onEditorMount: (editor: editor.IStandaloneCodeEditor) => void = (
    editor: editor.IStandaloneCodeEditor,
  ) => {
    if (!props.config?.fullHeight) {
      editor.onDidContentSizeChange(() => {
        updateEditorHeight(editor);
      });
      updateEditorHeight(editor);
    }
    if (props.config?.actions) {
      props.config.actions.forEach((action) => {
        editor.addAction(action);
      });
    }
    if (props.focused) {
      editor.focus();
    }
  };
  const updateEditorHeight: (editor: editor.IStandaloneCodeEditor) => void = (
    editor: editor.IStandaloneCodeEditor,
  ) => {
    const editorElement = editor.getDomNode();

    if (!editorElement) {
      return;
    }

    const lineHeight = 23;
    const lineCount = editor.getModel()?.getLineCount() ?? 1;
    const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight;

    editorElement.style.height = `${height}px`;
    editorElement.style.width = '100%';
    editor.layout({
      width: editorElement.getBoundingClientRect().width,
      height,
    });
  };
  return (
    <div className="grid grid-cols-1">
      <Editor
        height={props.config?.fullHeight ? '100%' : 'auto'}
        options={props.config?.options ?? adjustableHeightCodeOptions}
        theme={props.config?.theme}
        value={props.src}
        language={props.language}
        onChange={onCodeChange}
        onMount={onEditorMount}
      />
    </div>
  );
};

export const adjustableHeightCodeOptions: editor.IStandaloneEditorConstructionOptions =
  {
    quickSuggestions: {
      other: 'inline',
      comments: true,
      strings: true,
    },
    cursorBlinking: 'smooth',
    wrappingStrategy: 'advanced',
    wordWrap: 'on',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    readOnly: false,
    overviewRulerLanes: 0,
    lineNumbers: 'on',
    renderLineHighlightOnlyWhenFocus: true,
  };
export const readonlyAdjustableHeightCodeOptions: editor.IStandaloneEditorConstructionOptions =
  {
    quickSuggestions: {
      other: 'inline',
      comments: true,
      strings: true,
    },
    cursorBlinking: 'smooth',
    wrappingStrategy: 'advanced',
    wordWrap: 'on',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    overviewRulerLanes: 0,
    readOnly: true,
    lineNumbers: (_: number) => ' ',
    renderLineHighlight: 'none',
  };

CodeComponent.defaultProps = {
  config: {
    fullHeight: false,
    options: adjustableHeightCodeOptions,
    theme: 'light',
    actions: [],
  },
};
