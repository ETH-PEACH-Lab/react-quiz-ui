import React from 'react';
import { CodeComponent, MarkdownComponent } from '../../../src-elements';
import { type MarkdownEditorComponentProps } from '../MarkdownEditorComponent';

export const MarkdownEditorDefaultComponent: React.FC<
  MarkdownEditorComponentProps
> = ({ src, config, onChange }: MarkdownEditorComponentProps) => {
  const code = (
    <CodeComponent
      language="markdown"
      src={src}
      config={config?.codeConfig}
      onCodeChange={onChange}></CodeComponent>
  );
  const markdown = (
    <MarkdownComponent
      src={src}
      config={config?.markdownConfig}></MarkdownComponent>
  );
  return (
    <div
      className={'grid gap-4 ' + (config?.alignVertical ? '' : 'grid-cols-2')}>
      {config?.alignVertical ? markdown : code}
      {config?.alignVertical ? code : markdown}
    </div>
  );
};
