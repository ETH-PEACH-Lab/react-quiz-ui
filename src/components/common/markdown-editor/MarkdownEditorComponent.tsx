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
export const MarkdownEditorComponent: React.FC<MarkdownEditorComponentProps> = (
  props: MarkdownEditorComponentProps,
) => {
  if (props.config?.tabs) {
    return <MarkdownEditorTabComponent {...props}></MarkdownEditorTabComponent>;
  }
  if (props.config?.jupyter) {
    return (
      <MarkdownEditorJupyterComponent
        {...props}></MarkdownEditorJupyterComponent>
    );
  }
  return (
    <MarkdownEditorDefaultComponent {...props}></MarkdownEditorDefaultComponent>
  );
};
MarkdownEditorComponent.defaultProps = {
  config: {
    alignVertical: false,
  },
};
