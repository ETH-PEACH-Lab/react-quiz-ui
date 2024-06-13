import React, { useEffect, useState } from 'react';
import { type ExerciseProps } from '../types/ExerciseProps';
import { MarkdownEditorComponent } from '../../common/markdown-editor/MarkdownEditorComponent';
import { type ITextResponseAnswer, type ITextResponseExercise } from './types';
import { MarkdownComponent } from '../../src-elements';

export const TextResponseComponent: React.FC<
  ExerciseProps<ITextResponseExercise, ITextResponseAnswer>
> = (props: ExerciseProps<ITextResponseExercise, ITextResponseAnswer>) => {
  const [answer, setAnswer] = useState(props.initialAnswer.answer);
  useEffect(() => {
    setAnswer(props.initialAnswer.answer);
  }, [props.initialAnswer.answer]);
  useEffect(() => {
    props.onAnswerChanges({
      ...props.initialAnswer,
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
          config={props.exerciseObject.metadata?.markdownEditorConfig}
        />
      </div>
      {props.exerciseObject.metadata?.showSolution &&
        props.exerciseObject.solution && (
          <div className="p-2 bg-base-200 mt-4">
            <p className="text-xs">Solution:</p>
            <MarkdownComponent
              src={props.exerciseObject.solution}
              className={
                props.exerciseObject.metadata.markdownEditorConfig
                  ?.solutionMarkdownClassName
              }
            />
          </div>
        )}
    </>
  );
};
