import React, { useId, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('code');
  const id = useId();
  const Code = (
    <CodeComponent
      language="markdown"
      src={props.src}
      config={props.config?.codeConfig}
      onCodeChange={props.onChange}></CodeComponent>
  );
  const Markdown = (
    <MarkdownComponent
      src={props.src}
      config={props.config?.markdownConfig}></MarkdownComponent>
  );
  return props.config?.tabs ? (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name={id}
        role="tab"
        className={'tab ' + (activeTab === 'code' ? 'tab-active' : '')}
        aria-label="Plain"
        onClick={() => {
          setActiveTab('code');
        }}
      />
      <div role="tabpanel" className="tab-content bg-white rounded-box p-6">
        {Code}
      </div>

      <input
        type="radio"
        name={id}
        role="tab"
        className={'tab ' + (activeTab === 'markdown' ? 'tab-active' : '')}
        onClick={() => {
          setActiveTab('markdown');
        }}
        aria-label="Markdown"
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
