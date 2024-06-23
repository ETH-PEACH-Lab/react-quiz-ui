import React from 'react';
import Markdown from 'react-markdown';
import { type IMarkdownConfig } from './types/IMarkdownConfig';

interface MarkdownComponentProps {
  config?: IMarkdownConfig;
  src: string;
  className?: string;
}
export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  config,
  src,
  className,
}: MarkdownComponentProps) => {
  return (
    <Markdown
      remarkPlugins={config?.remarkPlugins ?? []}
      rehypePlugins={config?.rehypePlugins ?? []}
      className={'whitespace-pre-wrap ' + className}>
      {src}
    </Markdown>
  );
};
