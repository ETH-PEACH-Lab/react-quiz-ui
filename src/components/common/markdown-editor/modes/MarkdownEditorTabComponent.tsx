import React, { useId, useState } from 'react';
import { CodeComponent, MarkdownComponent } from '../../../src-elements';
import { type MarkdownEditorComponentProps } from '../MarkdownEditorComponent';
export const MarkdownEditorTabComponent: React.FC<
  MarkdownEditorComponentProps
> = ({ src, config, onChange }: MarkdownEditorComponentProps) => {
  const [activeTab, setActiveTab] = useState('code');
  const id = useId();
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
        {code}
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
        {markdown}
      </div>
    </div>
  );
};
