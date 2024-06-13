import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { MultipleChoiceResultIndicatorComponent } from '../../../../components';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<
  typeof MultipleChoiceResultIndicatorComponent
> & { descriptionText: string };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
  component: MultipleChoiceResultIndicatorComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    correct: true,
  },
  render: (args) => {
    return <MultipleChoiceResultIndicatorComponent {...args} />;
  },
} satisfies Story;

export const First: Story = {
  name: 'Correct Indicator',
  ...Template,
};
export const Second: Story = {
  name: 'Incorrect Indicator',
  ...Template,
  args: {
    correct: false,
  },
};
