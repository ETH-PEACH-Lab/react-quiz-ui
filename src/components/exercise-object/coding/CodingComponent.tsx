import React, { useEffect, useState } from 'react'
import { type ExerciseProps } from '../types'
import { type ICodingAnswer, type ICodingExercise } from './types'
import CodeComponent, { adjustableHeightCodeOptions, readonlyAdjustableHeightCodeOptions } from '../../src-object/code/CodeComponent'
interface ICodingComponentProps extends ExerciseProps {
  exerciseObject: ICodingExercise
  initialAnswer: ICodingAnswer
  onAnswerChanges: (answer: ICodingAnswer) => void
}
const CodingComponent: React.FC<ICodingComponentProps> = (props: ICodingComponentProps) => {
  const [src, setSrc] = useState(props.initialAnswer.answer.src)
  const startingCode = props.exerciseObject.startingCode
  useEffect(() => {
    props.onAnswerChanges({
      exerciseId: props.initialAnswer.exerciseId,
      answer: { ...props.initialAnswer.answer, src }
    })
  }, [src])
  return <>
        {startingCode &&
        <CodeComponent language={startingCode.language}
            src={startingCode.src}
            config={props.exerciseObject.metadata?.startingCodeConfig ?? { options: readonlyAdjustableHeightCodeOptions }}/>}
        <CodeComponent language={props.initialAnswer.answer.language}
            src={src}
            onCodeChange={value => { setSrc(value) }}
            config={{ options: adjustableHeightCodeOptions }}

        ></CodeComponent>
     </>
}

export default CodingComponent
