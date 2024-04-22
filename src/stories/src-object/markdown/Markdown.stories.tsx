import { type Meta, type StoryObj } from "@storybook/react";
import { MarkdownComponent } from "../../../components";

const meta: Meta<typeof MarkdownComponent> = {
  title: "src-object/markdown/MarkdownComponent",
  component: MarkdownComponent,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Simple h2",
  args: {
    src: "## Test",
  },
};
export const Secondary: Story = {
  name: "Simple multiline",
  args: {
    src: "Hello" + "\nWorld\n" + "...",
  },
};
