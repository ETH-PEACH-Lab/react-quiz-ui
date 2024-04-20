import React from 'react'
import {Meta, StoryObj } from "@storybook/react";
import MultipleChoiceItemComponent from '../../../../components/exercise-object/multiple-choice/item/MultipleChoiceItemComponent';
import { fn } from '@storybook/test';
import { IMarkdown } from '../../../../components';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceItemComponent> & { descriptionText: string };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
    component: MultipleChoiceItemComponent
}

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
    render: (args) => {
        const description: IMarkdown = {
            id: 'mc-item-id',
            src: args.descriptionText,
            type: 'markdown'
        }
        return <MultipleChoiceItemComponent {...args} item={description}/>
    },
    argTypes:{
        parentId: {
            control: false
        },
        descriptionText: {
            description: 'Storybook argument'
        },
        item: {
            control: false
        },
    }
} satisfies Story
export const First :Story = {
    name:'Radio Button',
    args:{
        multi: false,
        descriptionText: 'Multiple Choice Item',
        parentId: 'mcq-id',
        onChange: fn()
    },
    ...Template
}
export const Second :Story = {
    name:'Checkbox Button',
    args:{
        multi: true,
        descriptionText: 'Multiple Choice Item',
        parentId: 'mcq-id',
        onChange: fn()
    },
    ...Template
}
export const Thrid :Story = {
    name:'Checked checkbox Button',
    args:{
        multi: true,
        descriptionText: 'Multiple Choice Item',
        parentId: 'mcq-id',
        onChange: fn(),
        defaultChecked: true
    },
    ...Template
}