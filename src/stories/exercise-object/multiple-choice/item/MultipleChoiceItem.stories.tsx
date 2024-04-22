import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import MultipleChoiceItemComponent from "../../../../components/exercise-object/multiple-choice/item/MultipleChoiceItemComponent";
import { fn } from "@storybook/test";
import { type IMarkdown } from "../../../../components";

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
    const description: IMarkdown = {
      id: "mc-item-id",
      src: args.descriptionText,
      type: "markdown",
    };
    return <MultipleChoiceItemComponent {...args} item={description} />;
  },
  argTypes: {
    parentId: {
      control: false,
    },
    descriptionText: {
      description: "Storybook argument",
    },
    item: {
      control: false,
    },
  },
} satisfies Story;
export const First: Story = {
  name: "Radio Button",
  args: {
    config: {
      multi: false,
    },
    descriptionText: "Multiple Choice Item",
    parentId: "mcq-id",
    onChange: fn(),
  },
  ...Template,
};
export const Second: Story = {
  name: "Checkbox Button",
  args: {
    config: {
      multi: true,
    },
    descriptionText: "Multiple Choice Item",
    parentId: "mcq-id",
    onChange: fn(),
  },
  ...Template,
};
export const Thrid: Story = {
  name: "Checked checkbox Button",
  args: {
    config: {
      multi: true,
      defaultChecked: true,
    },

    descriptionText: "Multiple Choice Item",
    parentId: "mcq-id",
    onChange: fn(),
  },
  ...Template,
};
