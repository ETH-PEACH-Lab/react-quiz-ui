import { type editor } from 'monaco-editor';

export const onEditorMount: (
  editor: editor.ICodeEditor | editor.IDiffEditor,
  focused?: boolean,
) => void = (
  editor: editor.ICodeEditor | editor.IDiffEditor,
  focused?: boolean,
) => {
  if (focused) {
    editor.focus();
  }
};
export const updateCodeEditorHeight: (editor: editor.ICodeEditor) => void = (
  editor: editor.ICodeEditor,
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

export const updateDiffCodeEditorHeight: (
  editor: editor.IDiffEditor,
) => void = (editor: editor.IDiffEditor) => {
  const editorElement = editor.getContainerDomNode();

  if (!editorElement) {
    return;
  }

  const lineHeight = 23;
  const lineCount = Math.max(
    editor.getModel()?.modified.getLineCount() ?? 1,
    editor.getModel()?.original.getLineCount() ?? 1,
  );
  const height =
    Math.max(
      editor.getOriginalEditor().getTopForLineNumber(lineCount + 1),
      editor.getModifiedEditor().getTopForLineNumber(lineCount + 1),
    ) + lineHeight;
  editorElement.style.height = `${height}px`;
  editorElement.style.width = '100%';
  editor.layout({
    width: editorElement.getBoundingClientRect().width,
    height,
  });
};

export const adjustableHeightCodeOptions:
  | editor.IStandaloneEditorConstructionOptions
  | editor.IStandaloneDiffEditorConstructionOptions = {
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
export const readonlyAdjustableHeightCodeOptions:
  | editor.IStandaloneEditorConstructionOptions
  | editor.IStandaloneDiffEditorConstructionOptions = {
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
