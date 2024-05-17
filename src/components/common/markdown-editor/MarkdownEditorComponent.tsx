import React, { useId } from 'react';
import { MarkdownComponent } from '../../src-elements';
import { type IMarkdownEditorConfig } from './types';
import { CodeComponent } from '../../src-elements/code/CodeComponent';

interface MarkdownEditorComponentProps {
  src: string;
  config?: IMarkdownEditorConfig;
  onChange: (value: string) => void;
}
export const MarkdownEditorComponent: React.FC<MarkdownEditorComponentProps> = (
  props: MarkdownEditorComponentProps,
) => {
  const id = useId();
  const Code = (
    <CodeComponent
      language="markdown"
      src={props.src}
      config={props.config?.codeConfig}
      onCodeChange={props.onChange}></CodeComponent>
  );
  const Markdown = <MarkdownComponent src={props.src}></MarkdownComponent>;
  return props.config?.tabs ? (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name={id}
        role="tab"
        className="tab"
        aria-label="Source"
        checked={true}
      />
      <div role="tabpanel" className="tab-content bg-white rounded-box p-6">
        {Code}
      </div>

      <input
        type="radio"
        name={id}
        role="tab"
        className="tab"
        aria-label="Preview"
      />
      <div role="tabpanel" className="tab-content bg-white rounded-box p-6">
        {Markdown}
      </div>
    </div>
  ) : (
    <div
      className={
        'grid gap-4 ' + (props.config?.alignVertical ? '' : 'grid-cols-2')
      }>
      {props.config?.alignVertical ? Markdown : Code}
      {props.config?.alignVertical ? Code : Markdown}
    </div>
  );
};
MarkdownEditorComponent.defaultProps = {
  config: {
    alignVertical: false,
  },
};
