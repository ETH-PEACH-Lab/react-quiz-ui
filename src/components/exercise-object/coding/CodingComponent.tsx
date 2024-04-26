import React, { useEffect, useState } from 'react';
import { type ExerciseProps } from '../types';
import {
  CodeComponent,
  adjustableHeightCodeOptions,
  readonlyAdjustableHeightCodeOptions,
} from '../../src-object/code/CodeComponent';
import { MarkdownComponent } from '../../src-object';
import { type ICodingAnswer, type ICodingExercise } from './types';

export const CodingComponent: React.FC<
  ExerciseProps<ICodingExercise, ICodingAnswer>
> = (props: ExerciseProps<ICodingExercise, ICodingAnswer>) => {
  const [src, setSrc] = useState(props.initialAnswer.answer.src);
  const startingCode = props.exerciseObject.startingCode;
  useEffect(() => {
    props.onAnswerChanges({
      exerciseId: props.initialAnswer.exerciseId,
      answer: { ...props.initialAnswer.answer, src },
    });
  }, [src]);
  return (
    <>
      <MarkdownComponent
        src={props.exerciseObject.description.src}></MarkdownComponent>
      <div className="mt-4">
        {startingCode && (
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
          src={src}
          onCodeChange={(value) => {
            setSrc(value);
          }}
          config={{ options: adjustableHeightCodeOptions }}></CodeComponent>
      </div>
    </>
  );
};
