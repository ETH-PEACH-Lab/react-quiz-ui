import React, { useState } from 'react';
import { type MarkdownEditorComponentProps } from '../MarkdownEditorComponent';
import { CodeComponent, MarkdownComponent } from '../../../src-elements';

export const MarkdownEditorJupyterComponent: React.FC<
  MarkdownEditorComponentProps
> = (props: MarkdownEditorComponentProps) => {
  const [editing, setEditing] = useState(!props.src.trim().length);
  const actions = props.config?.codeConfig?.actions ?? [];

  const blockContext =
    'editorTextFocus && !suggestWidgetVisible && !renameInputVisible && !inSnippetMode ' +
    '&& !quickFixWidgetVisible';
  const code = (
    <CodeComponent
      language="markdown"
      src={props.src}
      config={{
        ...props.config?.codeConfig,
        actions: [
          ...actions,
          {
            id: 'enterAndRenderMarkdown',
            label: 'Enter and Render Markdown',
            keybindings: [2048 | 3],
            contextMenuGroupId: '2_execution',
            precondition: blockContext,
            run: (editor) => {
              if (editor.getValue().trim().length > 0) {
                setEditing(false);
              }
            },
          },
        ],
      }}
      onCodeChange={props.onChange}
      focused={editing}></CodeComponent>
  );
  const markdown = (
    <MarkdownComponent
      src={props.src}
      config={props.config?.markdownConfig}></MarkdownComponent>
  );
  return !editing ? (
    <div
      className="cursor-pointer"
      onClick={() => {
        setEditing(true);
      }}>
      {markdown}
    </div>
  ) : (
    <div className="relative">
      {code}
      <span className="absolute right-0 top-0 text-xs mt-[-16px] ">
        CMD / CTRL + Enter
      </span>
    </div>
  );
};
