import React, { useEffect, useState } from 'react'
import { MarkdownComponent } from '../../src-object'
import { type ExerciseProps } from '../types/ExerciseProps'
import MarkdownEditorComponent from '../../common/markdown-editor/MarkdownEditorComponent'
import type ITextResponseExercise from './types/ITextResponseExercise'
import type ITextResponseAnswer from './types/ITextResponseAnswer'

interface ITextResponseComponentProps extends ExerciseProps {
  exerciseObject: ITextResponseExercise
  onAnswerChange: (answer: ITextResponseAnswer) => void
  initialAnswer: ITextResponseAnswer
}
const TextResponseComponent: React.FC<ITextResponseComponentProps> = (props: ITextResponseComponentProps) => {
  const [answer, setAnswer] = useState(props.initialAnswer.answer.src)
  useEffect(() => {
    props.onAnswerChange({
      exerciseId: props.exerciseObject.id,
      answer: { ...props.initialAnswer?.answer, src: answer }
    })
  }, [answer])

  return <>
        <MarkdownComponent src={props.exerciseObject.description.src}></MarkdownComponent>
        <div className='mt-4'>
            <MarkdownEditorComponent onChange={value => { setAnswer(value) }} src={answer} config={
                { alignVertical: props.exerciseObject.metadata?.vertical }
            }/>
        </div>
    </>
}
export default TextResponseComponent
