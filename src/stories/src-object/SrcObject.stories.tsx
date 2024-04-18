import {Meta, StoryObj } from "@storybook/react";
import { SrcObjectComponent } from "../../components";

const meta: Meta<typeof SrcObjectComponent> = {
    component: SrcObjectComponent,
};
export default meta;
type Story = StoryObj<typeof SrcObjectComponent>;

export const Primary: Story = {
    name:'Markdown',
    args:{
        object:{
            id: 'test',
            src: '### test',
            type: 'markdown'
        }
    }
};