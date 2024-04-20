import React from 'react'
import {Meta } from "@storybook/react";
import MultipleChoiceComponent from "../../../components/exercise-object/multiple-choice/MultipleChoiceComponent";
import { fn } from '@storybook/test';
import IMultipleChoiceItem from '../../../components/exercise-object/multiple-choice/types/IMultipleChoiceItem';
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceComponent> & { itemsCount: number };

const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs> = {
    component: MultipleChoiceComponent
}

export default meta;

type Story = TypeWithDeepControls<typeof meta>;
const Template = {
    args:{
        exerciseObject:{
            id:'test-mc',
            type: 'multiple-choice-exercise',
            items: [],
            description: {
                id: 'description',
                src: 'Multiple Choice Question',
                type: 'markdown'
            },
            metadata:{
                showEvaluation: false,
                disabled: false,
                random: false,
                correctAnswers: ['mc-item-0'],
            },
        },
        itemsCount: 3,
        onAnswerChanges: fn()

    },
    render: (args) => {
        const items :IMultipleChoiceItem[] = Array.from(Array(args.itemsCount).keys()).map(n=>{return {
            id: 'mc-item-'+n,
            src: 'Multiple Choice Item '+ n,
            type: 'markdown'
        }})
        delete (args as Partial<MultipleChoiceComponentPropsAndCustomArgs>).itemsCount;
        return <MultipleChoiceComponent {...args} exerciseObject={{...args.exerciseObject, items: items}}/>
    },
    argTypes:{
        "exerciseObject.items":{
            control: false
        },
        "exerciseObject.metadata.showEvaluation":{
            control:'boolean',
            description: 'Will show the evalualtion, iff it is set to true and the correctAnswers array is not empty'
        },
        "exerciseObject.metadata.random":{
            control:'boolean',
            description: 'Assign random location to each multiple choice item'
        },
        "exerciseObject.metadata.multi":{
            control:'boolean',
            description: 'Allow multiple answers'
        },
        "exerciseObject.metadata.disabled":{
            control:'boolean',

        },
        "exerciseObject.metadata.correctAnswers":{
            control: 'array'
        },
        itemsCount:{
            description: 'Storybook argument'
        }
    }
} satisfies Story
/**
 * ## Radio Button MC
 */
export const First :Story = {
    args:{
        ...Template.args,
        exerciseObject:{
            ...Template.args.exerciseObject,
            metadata:{
                ...Template.args.exerciseObject.metadata,
                multi:false
            }
        }
    },
    argTypes: Template.argTypes,
    render: Template.render
}
/**
 * ## Checkbox Button MC
 */
export const Second :Story = {
    args:{
        ...Template.args,
        exerciseObject:{
            ...Template.args.exerciseObject,
            metadata:{
                ...Template.args.exerciseObject.metadata,
                multi:true
            }
        }
    },
    argTypes: Template.argTypes,
    render: Template.render
}
/**
 * ## Random Checkbox Button MC
 */
export const Third :Story = {
    args:{
        ...Template.args,
        exerciseObject:{
            ...Template.args.exerciseObject,
            metadata:{
                ...Template.args.exerciseObject.metadata,
                multi:true,
                random:true
            }
        }
    },
    argTypes: Template.argTypes,
    render: Template.render
}
/**
 * ## Show Evaluation: Checkbox Button MC
 */
export const Forth :Story = {
    args:{
        ...Template.args,
        exerciseObject:{
            ...Template.args.exerciseObject,
            metadata:{
                ...Template.args.exerciseObject.metadata,
                multi:true,
                showEvaluation:true
            }
        }
    },
    argTypes: Template.argTypes,
    render: Template.render
}
/**
 * ## Show Evaluation with inital answer: Checkbox Button MC
 */
export const Fifth :Story = {
    args:{
        ...Template.args,
        exerciseObject:{
            ...Template.args.exerciseObject,
            metadata:{
                ...Template.args.exerciseObject.metadata,
                multi:true,
                showEvaluation:true,
                initialAnswer:  {
                    exerciseId: Template.args.exerciseObject.id,
                    answer: ['mc-item-1']
                }
            }
        },
    },
    argTypes: Template.argTypes,
    render: Template.render
}