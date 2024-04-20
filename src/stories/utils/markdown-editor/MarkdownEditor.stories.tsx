import { Meta } from "@storybook/react";
import React from "react";
import MarkdownEditorComponent from "../../../components/common/markdown-editor/MarkdownEditorComponent";
import { DeepStoryObj } from "../../StoryObj";

type MarkdownEditorComponentPropsAndCustomArgs = React.ComponentProps<typeof MarkdownEditorComponent>;

const meta: Meta<MarkdownEditorComponentPropsAndCustomArgs> = {
    component: MarkdownEditorComponent
}

export default meta;

type Story = DeepStoryObj<typeof meta>;
const Template = {
    args: {
        config:{
            alignVertical: false,
            codeConfig: undefined,
        }

    },
    render: (args) => {
        return <MarkdownEditorComponent {...args}/>
    },
    argTypes:{
        "config.codeOptions":{
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
        src: '## What is your option about react?',
        ...Template.args,
    },
    argTypes: Template.argTypes,
    render: Template.render
}