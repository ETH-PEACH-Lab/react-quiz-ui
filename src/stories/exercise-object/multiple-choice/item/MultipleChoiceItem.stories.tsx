import React from 'react'
import {Meta, StoryObj } from "@storybook/react";
import MultipleChoiceItemComponent from '../../../../components/exercise-object/multiple-choice/item/MultipleChoiceItemComponent';
import { fn } from '@storybook/test';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceItemComponent> & { descriptionText: string };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
    component: MultipleChoiceItemComponent
}

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
    render: (args) => {
        const description = {
            id: 'mc-item-id',
            src: args.descriptionText,
            type: 'markdown'
        }
        return <MultipleChoiceItemComponent onChange={args.onChange} parentId={args.parentId} multi={args.multi} item={description}/>
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
        }
    }
} satisfies Story
export const Primary :Story = {
    name:'Radio Button',
    args:{
        multi: false,
        descriptionText: 'Multiple Choice Item',
        parentId: 'mcq-id',
        onChange: fn()
    },
    ...Template
}
export const Secondary :Story = {
    name:'Checkbox Button',
    args:{
        multi: true,
        descriptionText: 'Multiple Choice Item',
        parentId: 'mcq-id',
        onChange: fn()
    },
    ...Template
}