import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { MultipleChoiceItemComponent } from '../../../../components/exercise-elements/multiple-choice/item/MultipleChoiceItemComponent';
import { fn } from '@storybook/test';
import { type IMultipleChoiceItem } from '../../../../components';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<
  typeof MultipleChoiceItemComponent
> & { descriptionText: string };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
  component: MultipleChoiceItemComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
  render: (args) => {
    const item: IMultipleChoiceItem = {
      id: 'mc-item-0',
      src: args.descriptionText,
    };
    return <MultipleChoiceItemComponent {...args} item={item} />;
  },
  argTypes: {
    parentId: {
      control: false,
    },
    descriptionText: {
      description: 'Storybook argument',
    },
    item: {
      control: false,
    },
  },
} satisfies Story;
export const First: Story = {
  name: 'Radio Button',
  args: {
    config: {
      multi: false,
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn(),
  },
  ...Template,
};
export const Second: Story = {
  name: 'Checkbox Button',
  args: {
    config: {
      multi: true,
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn(),
  },
  ...Template,
};
export const Thrid: Story = {
  name: 'Checked checkbox Button',
  args: {
    config: {
      multi: true,
      defaultChecked: true,
    },

    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn(),
  },
  ...Template,
};
