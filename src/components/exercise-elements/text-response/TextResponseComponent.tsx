import React, { useEffect, useState } from 'react';
import { type ExerciseProps } from '../types/ExerciseProps';
import { MarkdownEditorComponent } from '../../common/markdown-editor/MarkdownEditorComponent';
import type ITextResponseExercise from './types/ITextResponseExercise';
import type ITextResponseAnswer from './types/ITextResponseAnswer';

export const TextResponseComponent: React.FC<
  ExerciseProps<ITextResponseExercise, ITextResponseAnswer>
> = (props: ExerciseProps<ITextResponseExercise, ITextResponseAnswer>) => {
  const [answer, setAnswer] = useState(props.initialAnswer.answer.src);
  useEffect(() => {
    setAnswer(props.initialAnswer.answer.src);
  }, [props.initialAnswer.answer.src]);
  useEffect(() => {
    props.onAnswerChanges({
      ...props.initialAnswer,
      answer: { ...props.initialAnswer.answer, src: answer },
    });
  }, [answer]);

  return (
    <>
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
