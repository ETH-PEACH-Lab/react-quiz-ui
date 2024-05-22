import React, { useState } from 'react';
import { type MarkdownEditorComponentProps } from '../MarkdownEditorComponent';
import { CodeComponent, MarkdownComponent } from '../../../src-elements';

export const MarkdownEditorJupyterComponent: React.FC<
  MarkdownEditorComponentProps
> = (props: MarkdownEditorComponentProps) => {
  const [editing, setEditing] = useState(false);
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
            run: () => {
              setEditing(false);
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
    <>
      {code}
      <span className="absolute right-[10px] top-0 text-xs mt-[-7px]">
        CMD / CTRL + Enter
      </span>
    </>
  );
};
