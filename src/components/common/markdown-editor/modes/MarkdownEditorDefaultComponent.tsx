import React from 'react';
import { CodeComponent, MarkdownComponent } from '../../../src-elements';
import { type MarkdownEditorComponentProps } from '../MarkdownEditorComponent';

export const MarkdownEditorDefaultComponent: React.FC<
  MarkdownEditorComponentProps
> = (props: MarkdownEditorComponentProps) => {
  const code = (
    <CodeComponent
      language="markdown"
      src={props.src}
      config={props.config?.codeConfig}
      onCodeChange={props.onChange}></CodeComponent>
  );
  const markdown = (
    <MarkdownComponent
      src={props.src}
      config={props.config?.markdownConfig}></MarkdownComponent>
  );
  return (
    <div
      className={
        'grid gap-4 ' + (props.config?.alignVertical ? '' : 'grid-cols-2')
      }>
      {props.config?.alignVertical ? markdown : code}
      {props.config?.alignVertical ? code : markdown}
    </div>
  );
};
