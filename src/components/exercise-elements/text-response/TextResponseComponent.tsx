import React, { useEffect, useState } from 'react';
import { type ExerciseProps } from '../types/ExerciseProps';
import { MarkdownEditorComponent } from '../../common/markdown-editor/MarkdownEditorComponent';
import { type ITextResponseAnswer, type ITextResponseExercise } from './types';

export const TextResponseComponent: React.FC<
  ExerciseProps<ITextResponseExercise, ITextResponseAnswer>
> = ({
  exerciseObject,
  initialAnswer,
  onAnswerChanges,
}: ExerciseProps<ITextResponseExercise, ITextResponseAnswer>) => {
  const [answer, setAnswer] = useState(initialAnswer.answer);
  useEffect(() => {
    setAnswer(initialAnswer.answer);
  }, [initialAnswer.answer]);
  useEffect(() => {
    onAnswerChanges({
      ...initialAnswer,
      answer,
    });
  }, [answer]);

  return (
    <>
      <div className="mt-4">
        <MarkdownEditorComponent
          onChange={(value) => {
            setAnswer({ ...answer, src: value });
          }}
          src={answer.src}
          config={exerciseObject.metadata?.markdownEditorConfig}
        />
      </div>
    </>
  );
};
