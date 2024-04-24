# React Quiz UI Library 
This library offers several quiz react components. To see them in action visit the Storybook:
:rocket: [Storybook](https://eth-peach-lab.github.io/react-quiz-ui/)

## ExerciseObject Component

Each exercise component represents a specific type of exercise. Each type is  discussed in this section. All exercise component consist of description that is rendered as a markdown component. Normally this description states a problem or a question.

In addition, they take an initial answer as an input and pass back any changes made to the answer. 


### Multiple choice exercise
In this exercise, the user is asked to select 1 or m from n elements (with m <= n) based on the given question.

#### Features:
- Randomized order of the items
- Disable any User Input
- Show evaluation
- Radio button (1 out of n) vs checkbox (m out of n)

[Storybook Reference](https://eth-peach-lab.github.io/react-quiz-ui/?path=/docs/exercise-object-multiple-choice-multiplechoice--docs)


### Coding exercise
In this exercise, the user is asked to solve a coding problem. 


#### Features:
- Provide starting Code
- Tabs Support (Source / Preview)

[Storybook Reference](https://eth-peach-lab.github.io/react-quiz-ui/?path=/docs/exercise-object-coding-coding--docs)


### Text response exercise
In this exercise, the user is asked to write a text response based on a given question or problem.

#### Features:
- Vertical / horizontal alignment of the editor and the rendered markdown

[Storybook Reference](https://eth-peach-lab.github.io/react-quiz-ui/?path=/docs/exercise-object-text-response-textresponse--docs)

### Custom exercise

Each ExerciseObject component asks for the same generic props ``ExerciseProps<T extends IExerciseObject, E extends IExerciseAnswer,>``, where ``T`` and ``E`` are implemented according to the needs of its component.

[Example implementation for IExerciseObject](./src/components/exercise-object//multiple-choice/types/IMultipleChoiceExercise.ts)

[Example implementation for IExerciseAnswer](./src/components/exercise-object//multiple-choice/types/IMultipleChoiceAnswer.ts)

Then the following Component can be defined: 
```typescript
const MultipleChoiceComponent: 
    React.FC<ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>> = (props: ExerciseProps<IMultipleChoiceExercise, IMultipleChoiceAnswer>) => {
        
    }
```
Last but not least, the component has to be registered. This is down by calling the ``ExerciseComponentRegistry``: 
```typescript 
ExerciseComponentRegistry.registerExerciseComponent(
  'multiple-choice-exercise',
  MultipleChoiceComponent,
);
```

### ExerciseProps
Consists of the exercise object(``IExerciseObject``), an initial answer (``IExerciseAnswer``) and a callback function that emits any changes made to the answer (``IExerciseAnswer``)

### IExerciseObject
Consists of a ``description`` that specifies the problem or question, a ``metadata`` object that contains additional information and configurations, 
a ``type`` to leverage a component switch, an ``id`` and may also have additional exercise-specific properties.

### IExerciseAnswer
Consists of a reference id to the exercise itself, and an answer object which is exercise-specific. 

## SrcObject Component

These small components are used as modular building blocks for the exercise components.

### Markdown
Renders a markdown text.

[Storybook Reference](https://eth-peach-lab.github.io/react-quiz-ui/?path=/docs/src-object-markdown-markdowncomponent--docs)

### Code
Provides a monaco code editor with language highlighting.

[Storybook Reference](https://eth-peach-lab.github.io/react-quiz-ui/?path=/docs/src-object-code-object-code--docs)

### ISrcObject
This Interface consists of a ``src`` property which is rendered based on the implementation of the component, a ``type`` to leverage a component switch and ``id``.


### Todo:
Adding a registry to be able to add and register new SrcObject components. For example a component 

## Relations
!['relations'](./assets/uml.png)

## Technology
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

Further used packages can be found in the [package.json](./package.json)
## Discussion

Should a description of an ``IExerciseObject`` consist of multiple ISrcObject. To be able to render a markdown followed by a picture? 