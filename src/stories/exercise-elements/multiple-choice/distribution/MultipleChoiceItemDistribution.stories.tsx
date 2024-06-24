import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { MultipleChoiceItemDistribution } from '../../../../components';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<
  typeof MultipleChoiceItemDistribution
>;

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
  component: MultipleChoiceItemDistribution,
};

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    correct: true,
    distribution: 50,
  },
  render: (args) => {
    return <MultipleChoiceItemDistribution {...args} />;
  },
} satisfies Story;
export const First: Story = {
  name: 'Correct Example',
  ...Template,
};

export const Second: Story = {
  name: 'Incorrect Example',
  ...Template,
  args: {
    ...Template.args,
    correct: false,
  },
};
export const Third: Story = {
  name: '0 Distribution Example',
  ...Template,
  args: {
    ...Template.args,
    distribution: 0,
  },
};
