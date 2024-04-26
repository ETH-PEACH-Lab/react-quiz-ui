import { type Meta } from '@storybook/react';
import React from 'react';
import { MarkdownEditorComponent } from '../../../components/common/markdown-editor/MarkdownEditorComponent';
import { type DeepStoryObj } from '../../StoryObj';

type MarkdownEditorComponentPropsAndCustomArgs = React.ComponentProps<
  typeof MarkdownEditorComponent
>;
/**
 * This editor showcases an editing view for markdown code.
 * **The state has to be managed by the parent component.**
 */
const meta: Meta<MarkdownEditorComponentPropsAndCustomArgs> = {
  component: MarkdownEditorComponent,
};

export default meta;

type Story = DeepStoryObj<typeof meta>;
const Template = {
  args: {
    config: {
      alignVertical: false,
      tabs: false,
    },
  },
  render: (args) => {
    return <MarkdownEditorComponent {...args} />;
  },
  argTypes: {
    'config.codeOptions': {
      control: false,
    },
    'config.tabs': {
      control: false,
    },
  },
} satisfies Story;
export const Primary: Story = {
  name: 'Basic example',
  args: {
    src: '## What is your option about react?',
    ...Template.args,
  },
  argTypes: Template.argTypes,
  render: Template.render,
};

export const Secondary: Story = {
  name: 'Tabs example',
  args: {
    src: '## What is your option about react?',
    ...Template.args,
    config: {
      tabs: true,
    },
  },
  argTypes: Template.argTypes,
  render: Template.render,
};
