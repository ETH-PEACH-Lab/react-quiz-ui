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
> = ({
  exerciseObject,
  initialAnswer,
  onAnswerChanges,
}: ExerciseProps<ICodingExercise, ICodingAnswer>) => {
  const startingCode = exerciseObject.startingCode;
  useEffect(() => {
    onAnswerChanges({
      ...initialAnswer,
      answer: {
        ...initialAnswer.answer,
        src: initialAnswer.answer.src,
      },
    });
  }, [initialAnswer.answer.src]);
  return (
    <>
      <div className="mt-4">
        {startingCode && startingCode.src !== '' && (
          <CodeComponent
            language={startingCode.language}
            src={startingCode.src}
            config={
              exerciseObject.metadata?.startingCodeConfig ?? {
                options: readonlyAdjustableHeightCodeOptions,
              }
            }
          />
        )}
        <CodeComponent
          language={initialAnswer.answer.language}
          src={initialAnswer.answer.src}
          onCodeChange={(value) => {
            onAnswerChanges({
              ...initialAnswer,
              answer: { ...initialAnswer.answer, src: value },
            });
          }}
          config={
            exerciseObject.metadata?.answerCodeConfig ?? {
              options: adjustableHeightCodeOptions,
            }
          }></CodeComponent>
      </div>
    </>
  );
};
