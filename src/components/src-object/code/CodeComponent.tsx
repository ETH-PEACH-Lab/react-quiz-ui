import { Editor } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import React from 'react'
import { registerComponent } from '../registerComponent';
import { ICodeOptions } from './types';
import { registerDefaultComponentOption } from '../registerComponentOptions';

type CodeComponentProps = {
    src: string,
    language: string,
    options?: ICodeOptions
  }
const CodeComponent = (props: CodeComponentProps) => {
  console.log(props);
    const onCodeChange = (value: string | undefined) => {
        if (value && props.options?.onCodeChange) {
          props.options?.onCodeChange(value);
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

registerComponent('code',CodeComponent)

export const defaultCodeOptions:ICodeOptions ={
  options: {
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
  },
  theme:"light",
  fullHeight:false
} 
registerDefaultComponentOption('code',defaultCodeOptions)