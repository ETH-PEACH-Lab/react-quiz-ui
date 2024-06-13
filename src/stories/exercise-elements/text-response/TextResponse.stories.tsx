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
    exerciseObject: {
      metadata: {
        showSolution: false,
      },
      solution: 'Currying is awesome',
    },
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
  name: 'With initial value',
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
export const Third: Story = {
  name: 'With solution',
  args: {
    ...Template.args,
    exerciseObject: {
      solution: 'Currying is awesome',
      metadata: {
        showSolution: true,
      },
    },
    initialAnswer: {
      answer: {
        src: 'I love currying',
      },
    },
  },

  render: Template.render,
};
