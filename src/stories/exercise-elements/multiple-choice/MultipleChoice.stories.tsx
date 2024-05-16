import React from 'react';
import { type Meta } from '@storybook/react';
import { MultipleChoiceComponent } from '../../../components/exercise-elements/multiple-choice/MultipleChoiceComponent';
import { fn } from '@storybook/test';
import { type DeepStoryObj } from '../../StoryObj';
import { type IMultipleChoiceItem } from '../../../components';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<
  typeof MultipleChoiceComponent
> & { itemsCount: number };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
  component: MultipleChoiceComponent,
};

export default meta;

type Story = DeepStoryObj<typeof meta>;
const Template = {
  args: {
    exerciseObject: {
      items: [],
      metadata: {
        showEvaluation: false,
        disabled: false,
        random: false,
        correctAnswers: ['mc-item-0'],
      },
    },
    itemsCount: 3,
    onAnswerChanges: fn(),
  },
  render: (args) => {
    const items: IMultipleChoiceItem[] = Array.from(
      Array(args.itemsCount).keys(),
    ).map((n) => {
      return {
        id: 'mc-item-' + n,
        src: 'Multiple Choice Item ' + n,
      };
    });
    delete (args as Partial<MultipleChoiceComponentPropsAndCustomArgs>)
      .itemsCount;
    return (
      <MultipleChoiceComponent
        {...args}
        exerciseObject={{ ...args.exerciseObject, items }}
      />
    );
  },
  argTypes: {
    'exerciseObject.items': {
      control: false,
    },
    'exerciseObject.metadata.showEvaluation': {
      control: 'boolean',
      description:
        'Will show the evaluation, iff it is set to true and the correctAnswers array is not empty',
    },
    'exerciseObject.metadata.random': {
      control: 'boolean',
      description: 'Assign random location to each multiple choice item',
    },
    'exerciseObject.metadata.multi': {
      control: 'boolean',
      description: 'Allow multiple answers',
    },
    'exerciseObject.metadata.disabled': {
      control: 'boolean',
    },
    'exerciseObject.metadata.correctAnswers': {
      control: 'object',
    },
    itemsCount: {
      description: 'Storybook argument',
    },
  },
} satisfies Story;

export const First: Story = {
  name: 'Radio Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: false,
      },
    },
  },
  argTypes: Template.argTypes,
  render: Template.render,
};

export const Second: Story = {
  name: 'Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
      },
    },
  },
  argTypes: Template.argTypes,
  render: Template.render,
};
export const Third: Story = {
  name: 'Random Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        random: true,
      },
    },
  },
  argTypes: Template.argTypes,
  render: Template.render,
};

export const Forth: Story = {
  name: 'Show Evaluation: Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showEvaluation: true,
      },
    },
  },
  argTypes: Template.argTypes,
  render: Template.render,
};
export const Fifth: Story = {
  name: 'Show Evaluation with initial answer: Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showEvaluation: true,
      },
    },
    initialAnswer: {
      answer: ['mc-item-1'],
    },
  },
  argTypes: Template.argTypes,
  render: Template.render,
};
