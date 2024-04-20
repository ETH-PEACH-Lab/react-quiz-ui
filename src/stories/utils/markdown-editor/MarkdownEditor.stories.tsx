import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MarkdownEditorComponent from "../../../components/common/markdown-editor/MarkdownEditorComponent";

type TextResponseComponentPropsAndCustomArgs = React.ComponentProps<typeof MarkdownEditorComponent>;

const meta: Meta<TextResponseComponentPropsAndCustomArgs> = {
    component: MarkdownEditorComponent
}

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
    args: {
        alignVertical: false,
        codeOptions: undefined,
    },
    render: (args) => {
        return <MarkdownEditorComponent {...args}/>
    },
    argTypes:{
        codeOptions:{
            control: false
        }
    }
} satisfies Story
/**
 * This editor showcases an editing view for markdown code.
 * **The state has to be managed by the parent component.**
 */
export const Primary :Story = {
    name:'Basic example',
    args:{
        value: '## What is your option about react?',
        ...Template.args,
    },
    argTypes: Template.argTypes,
    render: Template.render
}