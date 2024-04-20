import React, { useEffect, useState } from 'react'
import { MarkdownComponent } from '../../src-object'
import { ExerciseProps } from '../types/ExerciseProps'
import MarkdownEditorComponent from '../../common/markdown-editor/MarkdownEditorComponent'
import ITextResponseExercise from './types/ITextResponseExercise'
import ITextResponseAnswer from './types/ITextResponseAnswer'

interface ITextResponseComponentProps extends ExerciseProps {
    exerciseObject: ITextResponseExercise,
    onAnswerChange: (answer: ITextResponseAnswer) => void
}
const TextResponseComponent = (props: ITextResponseComponentProps) => {
    const [answer, setAnswer] = useState(props.exerciseObject.metadata?.initialAnswer?.answer ?? '');
    useEffect(() => {
        props.onAnswerChanges({exerciseId: props.exerciseObject.id, answer:answer});
    }, [answer, props.onAnswerChanges]);


    return <>
        <MarkdownComponent src={props.exerciseObject.description.src}></MarkdownComponent>
        <div className='mt-4'>
            <MarkdownEditorComponent onChange={value => setAnswer(value)} value={answer} alignVertical={props.exerciseObject.metadata?.vertical}/>
        </div>
    </>
}

export default TextResponseComponent
