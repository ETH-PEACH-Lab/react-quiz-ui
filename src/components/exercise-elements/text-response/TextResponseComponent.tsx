import React, { useEffect, useState } from 'react';
import { type ExerciseProps } from '../types/ExerciseProps';
import { MarkdownEditorComponent } from '../../common/markdown-editor/MarkdownEditorComponent';
import { type ITextResponseAnswer, type ITextResponseExercise } from './types';
import { MarkdownComponent } from '../../src-elements';

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
      {exerciseObject.metadata?.showSolution && exerciseObject.solution && (
        <div className="p-2 bg-base-200 mt-4">
          <p className="text-xs">Solution:</p>
          <MarkdownComponent
            src={exerciseObject.solution}
            className={
              exerciseObject.metadata.markdownEditorConfig
                ?.solutionMarkdownClassName
            }
          />
        </div>
      )}
    </>
  );
};
