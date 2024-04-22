import { type Meta } from '@storybook/react';
import CodingComponent from '../../../components/exercise-object/coding/CodingComponent';
import { type DeepStoryObj } from '../../StoryObj';
import { fn } from '@storybook/test';
import React from 'react';

type CodingComponentPropsAndCustomArgs = React.ComponentProps<
  typeof CodingComponent
>;

const meta: Meta<CodingComponentPropsAndCustomArgs> = {
  title: 'exercise-object/coding/Coding',
  component: CodingComponent,
};

export default meta;

type Story = DeepStoryObj<typeof meta>;
const Template = {
  args: {
    exerciseObject: {
      id: 'coding-id',
      description: {
        id: 'coding-description-id',
        src: '## Factorial \n Please provide the factorial function',
        type: 'markdown',
      },
      startingCode: {
        id: 'coding-starting-code-id',
        src: 'def factorial(n):\r\n    """\r\n    Calculate the factorial of a non-negative integer n.\r\n    """',
        language: 'python',
        type: 'code',
      },
      type: 'coding-exercise',
    },
    initialAnswer: {
      exerciseId: 'coding-id',
      answer: {
        id: 'coding-answer-id',
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
      exerciseId: Template.args.exerciseObject.id,
      answer: {
        id: 'text-response-answer-id',
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
      exerciseId: Template.args.exerciseObject.id,
      answer: {
        id: 'text-response-answer-id',
        src: 'print("Hello World")',
        language: 'python',
        type: 'code',
      },
    },
  },
  render: Template.render,
};
