import { Editor } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import React from 'react'
import { ICodeOptions } from './types';

type CodeComponentProps = {
    src: string,
    language: string,
    onCodeChange?: (value:string) => void,
    options?: ICodeOptions
  }
const CodeComponent = (props: CodeComponentProps) => {
  console.log(props);
    const onCodeChange = (value: string | undefined) => {
        if (props.onCodeChange) {
          props.onCodeChange(value ?? '');
        }
      };
      const onEditorMount = (editor: editor.IStandaloneCodeEditor) => {
        if(!props.options?.fullHeight){
            editor.onDidContentSizeChange(() => updateEditorHeight(editor));
            updateEditorHeight(editor);
        }
      };
      const updateEditorHeight = (editor: editor.IStandaloneCodeEditor) => {
        const editorElement = editor.getDomNode()

        if (!editorElement) {
          return
        }

        const lineHeight = 19
        const lineCount = editor.getModel()?.getLineCount() || 1
        const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight

        editorElement.style.height = `${height}px`
        editor.layout()
      };
      return  <Editor
          height={props.options?.fullHeight ? '100%' : 'auto'}
          options={props.options?.options}
          theme={props.options?.theme}
          value={props.src}
          language={props.language}
          onChange={onCodeChange}
          onMount={onEditorMount}
  
        />
}

export default CodeComponent

export const oneLinerCodeOptions:editor.IStandaloneDiffEditorConstructionOptions ={
  quickSuggestions: {
      other: 'inline',
      comments: true,
      strings: true
    },
    cursorBlinking: 'smooth',
    wrappingStrategy: 'advanced',
    wordWrap: 'on',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    overviewRulerLanes: 0,
}