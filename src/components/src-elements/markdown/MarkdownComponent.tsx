import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownComponentProps {
  src: string;
}
export const MarkdownComponent: React.FC<MarkdownComponentProps> = (
  props: MarkdownComponentProps,
) => {
  return (
    <Markdown remarkPlugins={[remarkGfm]} className={'whitespace-pre-wrap'}>
      {props.src}
    </Markdown>
  );
};
