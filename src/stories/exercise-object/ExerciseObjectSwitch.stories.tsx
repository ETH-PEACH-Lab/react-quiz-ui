import { type Meta } from "@storybook/react";
import ExerciseObjectSwitch from "../../components/exercise-object/ExerciseObjectSwitch";
import { type DeepStoryObj } from "../StoryObj";
import { fn } from "@storybook/test";
import React from "react";
import type IMultipleChoiceExercise from "../../components/exercise-object/multiple-choice/types/IMultipleChoiceExercise";
import type ITextResponseExercise from "../../components/exercise-object/text-response/types/ITextResponseExercise";

type ExerciseObjectComponentPropsAndCustomArgs = React.ComponentProps<
  typeof ExerciseObjectSwitch
>;

const meta: Meta<ExerciseObjectComponentPropsAndCustomArgs> = {
  component: ExerciseObjectSwitch,
};

export default meta;

type Story = DeepStoryObj<typeof meta>;
const Template = {
  args: {
    onAnswerChanges: fn(),
  },
  render: (args) => {
    return <ExerciseObjectSwitch {...args} />;
  },
} satisfies Story;
export const Primary: Story = {
  name: "Text-Response",
  args: {
    ...Template.args,
    initialAnswer: {
      exerciseId: "text-response-id",
      answer: "",
    },
    exerciseObject: {
      id: "text-response-id",
      description: {
        id: "text-response-description-id",
        src: "## What is your opinion on functional programming?",
        type: "markdown",
      },
      metadata: {
        markdownEditorConfig: {
          alignVertical: false,
        },
      },
      type: "text-response-exercise",
    } satisfies ITextResponseExercise,
  },
  render: Template.render,
};
export const Secondary: Story = {
  name: "Multiple-Choice",
  args: {
    ...Template.args,
    exerciseObject: {
      id: "test-mc",
      type: "multiple-choice-exercise",
      items: [
        {
          id: "test-mc-0",
          src: "Multiple Choice Item 0",
          type: "markdown",
        },
        {
          id: "test-mc-1",
          src: "Multiple Choice Item 1",
          type: "markdown",
        },
        {
          id: "test-mc-2",
          src: "Multiple Choice Item 2",
          type: "markdown",
        },
      ],
      description: {
        id: "description",
        src: "Multiple Choice Question",
        type: "markdown",
      },
      metadata: {
        showEvaluation: false,
        disabled: false,
        random: false,
        correctAnswers: ["mc-item-0"],
      },
    } satisfies IMultipleChoiceExercise,
    initialAnswer: {
      exerciseId: "test-mc",
      answer: [],
    },
  },
  render: Template.render,
};
