import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

type MarkdownComponentProps = {
  src: string
}
export const MarkdownComponent = (props: MarkdownComponentProps) => {
  return (
      <Markdown remarkPlugins={[remarkGfm]} className={'whitespace-pre-wrap'}>{props.src}</Markdown>
  );
}