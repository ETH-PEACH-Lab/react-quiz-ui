import { type Meta, type StoryObj } from '@storybook/react'
import TextResponseComponent from '../../../components/exercise-object/text-response/TextResponseComponent'
import React from 'react'
import { fn } from '@storybook/test'

type TextResponseComponentPropsAndCustomArgs = React.ComponentProps<typeof TextResponseComponent>

const meta: Meta<TextResponseComponentPropsAndCustomArgs> = {
  component: TextResponseComponent
}

export default meta

type Story = StoryObj<typeof meta>
const Template = {
  args: {
    exerciseObject: {
      id: 'text-response-id',
      description: {
        id: 'text-response-description-id',
        src: '## What is your opinion on functional programming?',
        type: 'markdown'
      },
      metadata: {
        vertical: false
      },
      type: 'text-response'
    },
    initialAnswer: {
      exerciseId: 'text-response-id',
      answer: {
        id: 'text-response-answer-id',
        src: '',
        type: 'markdown'
      }
    },
    onAnswerChanges: fn()
  },
  render: (args) => {
    return <TextResponseComponent {...args}/>
  }
} satisfies Story
export const Primary: Story = {
  name: 'Base example',
  args: {
    ...Template.args
  },
  render: Template.render
}
export const Secondary: Story = {
  name: 'With inital value',
  args: {
    ...Template.args,
    initialAnswer: {
      exerciseId: Template.args.exerciseObject.id,
      answer: {
        id: 'text-response-answer-id',
        src: 'I love currying',
        type: 'markdown'
      }
    }
  },

  render: Template.render
}
