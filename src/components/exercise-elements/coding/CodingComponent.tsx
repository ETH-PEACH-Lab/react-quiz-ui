import React, { useEffect } from 'react';
import { type ExerciseProps } from '../types';
import {
  CodeComponent,
  adjustableHeightCodeOptions,
  readonlyAdjustableHeightCodeOptions,
} from '../../src-elements/code/CodeComponent';
import { type ICodingAnswer, type ICodingExercise } from './types';

export const CodingComponent: React.FC<
  ExerciseProps<ICodingExercise, ICodingAnswer>
> = (props: ExerciseProps<ICodingExercise, ICodingAnswer>) => {
  const startingCode = props.exerciseObject.startingCode;
  useEffect(() => {
    props.onAnswerChanges({
      ...props.initialAnswer,
      answer: {
        ...props.initialAnswer.answer,
        src: props.initialAnswer.answer.src,
      },
    });
  }, [props.initialAnswer.answer.src]);
  return (
    <>
      <div className="mt-4">
        {startingCode && startingCode.src !== '' && (
          <CodeComponent
            language={startingCode.language}
            src={startingCode.src}
            config={
              props.exerciseObject.metadata?.startingCodeConfig ?? {
                options: readonlyAdjustableHeightCodeOptions,
              }
            }
          />
        )}
        <CodeComponent
          language={props.initialAnswer.answer.language}
          src={props.initialAnswer.answer.src}
          onCodeChange={(value) => {
            props.onAnswerChanges({
              ...props.initialAnswer,
              answer: { ...props.initialAnswer.answer, src: value },
            });
          }}
          config={
            props.exerciseObject.metadata?.answerCodeConfig ?? {
              options: adjustableHeightCodeOptions,
            }
          }></CodeComponent>
      </div>
    </>
  );
};
