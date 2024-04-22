import React, { useEffect, useState } from 'react';
import { MarkdownComponent } from '../../src-object';
import { type ExerciseProps } from '../types/ExerciseProps';
import MarkdownEditorComponent from '../../common/markdown-editor/MarkdownEditorComponent';
import type ITextResponseExercise from './types/ITextResponseExercise';
import type ITextResponseAnswer from './types/ITextResponseAnswer';

const TextResponseComponent: React.FC<
  ExerciseProps<ITextResponseExercise, ITextResponseAnswer>
> = (props: ExerciseProps<ITextResponseExercise, ITextResponseAnswer>) => {
  const [answer, setAnswer] = useState(props.initialAnswer.answer.src);
  useEffect(() => {
    props.onAnswerChanges({
      exerciseId: props.exerciseObject.id,
      answer: { ...props.initialAnswer?.answer, src: answer },
    });
  }, [answer]);

  return (
    <>
      <MarkdownComponent
        src={props.exerciseObject.description.src}></MarkdownComponent>
      <div className="mt-4">
        <MarkdownEditorComponent
          onChange={(value) => {
            setAnswer(value);
          }}
          src={answer}
          config={props.exerciseObject.metadata?.markdownEditorConfig}
        />
      </div>
    </>
  );
};
export default TextResponseComponent;
