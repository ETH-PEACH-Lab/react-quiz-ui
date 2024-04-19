import React from 'react'
import {Meta, StoryObj } from "@storybook/react";
import { SrcObjectComponent } from "../../components";
type SrcObjectComponentPropsAndCustomArgs = React.ComponentProps<typeof SrcObjectComponent> & { type: 'markdown' | 'code', src: string };

const meta: Meta<SrcObjectComponentPropsAndCustomArgs> = {
    component: SrcObjectComponent,
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name:'Markdown',
    render: (args) => { 
        return <SrcObjectComponent object={{id: 'test', type: args.type, src: args.src}}/>
    },
    args:{
        src: '# test',
        type: 'markdown'
    },
    argTypes:{
        type:{
            control: 'select',
            description: 'Storybook argument',
            options:['markdown','code']
        },
        object: {
            control: false
        },
        src: {
            description: 'Storybook argument'
        },
        options: {
            control: false
        }
    }
};