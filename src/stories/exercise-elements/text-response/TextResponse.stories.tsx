import { type Meta, type StoryObj } from '@storybook/react';
import { TextResponseComponent } from '../../../components/exercise-elements/text-response/TextResponseComponent';
import React from 'react';
import { fn } from '@storybook/test';

type TextResponseComponentPropsAndCustomArgs = React.ComponentProps<
  typeof TextResponseComponent
>;

const meta: Meta<TextResponseComponentPropsAndCustomArgs> = {
  component: TextResponseComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    exerciseObject: {},
    initialAnswer: {
      answer: {
        src: '',
      },
    },
    onAnswerChanges: fn(),
  },
  render: (args) => {
    return <TextResponseComponent {...args} />;
  },
} satisfies Story;
export const Primary: Story = {
  name: 'Base example',
  args: {
    ...Template.args,
  },
  render: Template.render,
};
export const Secondary: Story = {
  name: 'With inital value',
  args: {
    ...Template.args,
    initialAnswer: {
      answer: {
        src: 'I love currying',
      },
    },
  },

  render: Template.render,
};
