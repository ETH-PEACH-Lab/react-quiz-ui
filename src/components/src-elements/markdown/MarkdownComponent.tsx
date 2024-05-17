import React from 'react';
import Markdown from 'react-markdown';
import rehypeMathjax from 'rehype-mathjax';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

interface MarkdownComponentProps {
  src: string;
}
export const MarkdownComponent: React.FC<MarkdownComponentProps> = (
  props: MarkdownComponentProps,
) => {
  return (
    <Markdown
      remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
      rehypePlugins={[rehypeMathjax]}
      className={'whitespace-pre-wrap'}>
      {props.src}
    </Markdown>
  );
};
