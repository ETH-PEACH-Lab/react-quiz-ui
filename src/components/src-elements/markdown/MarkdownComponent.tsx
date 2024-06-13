import React from 'react';
import Markdown from 'react-markdown';
import { type IMarkdownConfig } from './types/IMarkdownConfig';

interface MarkdownComponentProps {
  config?: IMarkdownConfig;
  src: string;
  className?: string;
}
export const MarkdownComponent: React.FC<MarkdownComponentProps> = (
  props: MarkdownComponentProps,
) => {
  return (
    <Markdown
      remarkPlugins={props.config?.remarkPlugins ?? []}
      rehypePlugins={props.config?.rehypePlugins ?? []}
      className={'whitespace-pre-wrap ' + props.className}>
      {props.src}
    </Markdown>
  );
};
