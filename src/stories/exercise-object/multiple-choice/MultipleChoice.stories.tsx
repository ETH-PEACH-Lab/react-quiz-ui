import React from 'react'
import {Meta, StoryObj } from "@storybook/react";
import MultipleChoiceComponent from "../../../components/exercise-object/multiple-choice/MultipleChoiceComponent";

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceComponent> & { itemsCount: number, descriptionText: string };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
    component: MultipleChoiceComponent
}

export default meta;

type Story = StoryObj<typeof meta>;
const Template = {
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
        return <MultipleChoiceComponent id={args.id} multi={args.multi} items={items} description={description}/>
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
        id: 'test-mc',
        multi: false,
        itemsCount: 3,
        descriptionText: '## Multiple Choice'
    },
    ...Template
}
export const Secondary :Story = {
    name:'Checkbox Button MC',
    args:{
        id: 'test-mc',
        multi: true,
        itemsCount: 3,
        descriptionText: '## Multiple Choice'
    },
    ...Template
}