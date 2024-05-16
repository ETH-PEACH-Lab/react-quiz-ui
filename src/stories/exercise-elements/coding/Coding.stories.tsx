import { type Meta } from '@storybook/react';
import { CodingComponent } from '../../../components/exercise-elements/coding/CodingComponent';
import { type DeepStoryObj } from '../../StoryObj';
import { fn } from '@storybook/test';
import React from 'react';

type CodingComponentPropsAndCustomArgs = React.ComponentProps<
  typeof CodingComponent
>;

const meta: Meta<CodingComponentPropsAndCustomArgs> = {
  title: 'exercise-elements/coding/Coding',
  component: CodingComponent,
};

export default meta;

type Story = DeepStoryObj<typeof meta>;
const Template = {
  args: {
    exerciseObject: {
      startingCode: {
        src: 'def factorial(n):\r\n    """\r\n    Calculate the factorial of a non-negative integer n.\r\n    """',
        language: 'python',
        type: 'code',
      },
    },
    initialAnswer: {
      referenceId: 'referenceId',
      answer: {
        src: '',
        type: 'code',
        language: 'python',
      },
    },
    onAnswerChanges: fn(),
  },
  render: (args) => {
    return <CodingComponent {...args} />;
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
      referenceId: 'referenceId',
      answer: {
        src: '    if n == 0:\r\n        return 1\r\n    else:\r\n        return n * factorial(n - 1)',
        language: 'python',
        type: 'code',
      },
    },
  },

  render: Template.render,
};
export const Third: Story = {
  name: 'No starting code',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      startingCode: undefined,
    },
    initialAnswer: {
      referenceId: 'referenceId',
      answer: {
        src: 'print("Hello World")',
        language: 'python',
        type: 'code',
      },
    },
  },
  render: Template.render,
};
