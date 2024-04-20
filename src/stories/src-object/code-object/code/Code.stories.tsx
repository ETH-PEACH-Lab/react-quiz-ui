import { Meta, StoryObj } from "@storybook/react";
import CodeComponent, { oneLinerCodeOptions } from "../../../../components/src-object/code/CodeComponent";
/**
 * Wrapper for Monaco Code editor. Uses the oneLinerCodeOptions in these examples.
 */
const meta: Meta<typeof CodeComponent> = {
    component: CodeComponent,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name:'Simple javascript',
    args:{
        src: 'let x = 5',
        language: 'javascript',
        options: {
            options: oneLinerCodeOptions
        }
    }
};
export const Secondary: Story = {
    name:'Simple multiline',
    args:{
        src: 'Hello' + '\nWorld\n' + "...",
        language: 'javascript',
        options: {
            options: oneLinerCodeOptions
        }
    }
};