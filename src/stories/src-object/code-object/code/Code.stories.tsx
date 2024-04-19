import { Meta, StoryObj } from "@storybook/react";
import CodeComponent from "../../../../components/src-object/code/CodeComponent";
import { getDefaultComponentOptions } from "../../../../components/src-object/registerComponentOptions";

const meta: Meta<typeof CodeComponent> = {
    component: CodeComponent,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name:'Simple h2',
    args:{
        src: 'let x = y',
        language: 'javascript',
        options: getDefaultComponentOptions('code')
    }
};
export const Secondary: Story = {
    name:'Simple multiline',
    args:{
        src: 'Hello' + '\nWorld\n' + "..."
    }
};