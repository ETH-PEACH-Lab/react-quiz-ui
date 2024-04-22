import { Editor } from '@monaco-editor/react'
import { type editor } from 'monaco-editor'
import React from 'react'
import { type ICodeConfig } from './types'

interface CodeComponentProps {
  src: string
  language: string
  onCodeChange?: (value: string) => void
  config?: ICodeConfig
}
const CodeComponent: React.FC<CodeComponentProps> = (props: CodeComponentProps) => {
  const onCodeChange: (value: string | undefined) => void = (value: string | undefined) => {
    if (props.onCodeChange) {
      props.onCodeChange(value ?? '')
    }
  }
  const onEditorMount: (editor: editor.IStandaloneCodeEditor) => void = (editor: editor.IStandaloneCodeEditor) => {
    if (!props.config?.fullHeight) {
      editor.onDidContentSizeChange(() => { updateEditorHeight(editor) })
      updateEditorHeight(editor)
    }
  }
  const updateEditorHeight: (editor: editor.IStandaloneCodeEditor) => void = (editor: editor.IStandaloneCodeEditor) => {
    const editorElement = editor.getDomNode()

    if (!editorElement) {
      return
    }

    const lineHeight = 19
    const lineCount = editor.getModel()?.getLineCount() ?? 1
    const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight

    editorElement.style.height = `${height}px`
    editor.layout()
  }

  return <Editor
          height={props.config?.fullHeight ? '100%' : 'auto'}
          options={props.config?.options}
          theme={props.config?.theme}
          value={props.src}
          language={props.language}
          onChange={onCodeChange}
          onMount={onEditorMount}

        />
}

export default CodeComponent

export const adjustableHeightCodeOptions: editor.IStandaloneDiffEditorConstructionOptions = {
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
  overviewRulerLanes: 0
}
export const readonlyAdjustableHeightCodeOptions: editor.IStandaloneDiffEditorConstructionOptions = {
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
  readOnly: true,
  lineNumbers: (_: number) => ' '
}

CodeComponent.defaultProps = {
  config: {
    fullHeight: false,
    options: adjustableHeightCodeOptions,
    theme: 'light'
  }
}
