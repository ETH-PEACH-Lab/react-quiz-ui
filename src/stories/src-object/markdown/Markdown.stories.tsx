import {Meta, StoryObj } from "@storybook/react";
import { MarkdownComponent } from "../../../components";

const meta: Meta<typeof MarkdownComponent> = {
    component: MarkdownComponent,
};
export default meta;
type Story = StoryObj<typeof MarkdownComponent>;

export const Primary: Story = {
    name:'Simple h2',
    args:{
        src: '## Test'
    }
};
export const Secondary: Story = {
    name:'Simple multiline',
    args:{
        src: 'Hello  ' + '\r\nWorld  '
    }
};