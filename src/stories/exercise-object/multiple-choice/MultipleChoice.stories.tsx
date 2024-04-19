import React from 'react'
import {Meta, StoryObj } from "@storybook/react";
import MultipleChoiceComponent from "../../../components/exercise-object/multiple-choice/MultipleChoiceComponent";
import { fn } from '@storybook/test';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceComponent> & { itemsCount: number, descriptionText: string };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
    component: MultipleChoiceComponent
}

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
    args:{
        id: 'test-mc',
        itemsCount: 3,
        descriptionText: '## Multiple Choice',
        correctAnswers: ['mc-item-0'],
        onSelectedItemsChange: fn(),
        showResult: false,
        random: false,
        itemsShown: undefined
    },
    render: (args) => {
        const items = Array.from(Array(args.itemsCount).keys()).map(n=>{return {
            id: 'mc-item-'+n,
            src: 'Multiple Choice Item '+ n,
            type: 'markdown'
        }})
        const description = {
            id: 'description',
            src: args.descriptionText,
            type: 'markdown'
        }
        delete (args as Partial<MultipleChoiceComponentPropsAndCustomArgs>).descriptionText;
        delete (args as Partial<MultipleChoiceComponentPropsAndCustomArgs>).itemsCount;
        return <MultipleChoiceComponent {...args} items={items} description={description}/>
    },
    argTypes:{
        itemsCount:{
            description: 'Storybook argument'
        },
        items: {
            control: false
        },
        descriptionText: {
            description: 'Storybook argument'
        },
        description: {
            control: false
        }
    }
} satisfies Story
export const Primary :Story = {
    name:'Radio Button MC',
    args:{
        multi: false,
        ...Template.args
    },
    argTypes: Template.argTypes,
    render: Template.render
}
export const Secondary :Story = {
    name:'Checkbox Button MC',
    args:{
        multi: true,
        ...Template.args
    },
    argTypes: Template.argTypes,
    render: Template.render
}