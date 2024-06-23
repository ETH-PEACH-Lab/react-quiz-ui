import React from 'react';
import { type IMarkdownEditorConfig } from './types';
import {
  MarkdownEditorDefaultComponent,
  MarkdownEditorJupyterComponent,
  MarkdownEditorTabComponent,
} from './modes';

export interface MarkdownEditorComponentProps {
  src: string;
  config?: IMarkdownEditorConfig;
  onChange: (value: string) => void;
}
export const MarkdownEditorComponent: React.FC<
  MarkdownEditorComponentProps
> = ({
  src,
  config = { alignVertical: true },
  onChange,
}: MarkdownEditorComponentProps) => {
  if (config?.tabs) {
    return (
      <MarkdownEditorTabComponent
        onChange={onChange}
        src={src}
        config={config}></MarkdownEditorTabComponent>
    );
  }
  if (config?.jupyter) {
    return (
      <MarkdownEditorJupyterComponent
        onChange={onChange}
        src={src}
        config={config}></MarkdownEditorJupyterComponent>
    );
  }
  return (
    <MarkdownEditorDefaultComponent
      onChange={onChange}
      src={src}
      config={config}></MarkdownEditorDefaultComponent>
  );
};
