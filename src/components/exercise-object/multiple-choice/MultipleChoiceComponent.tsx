import React, { useEffect, useMemo, useState } from 'react'
import IMultipleChoiceItem from './types/IMultipleChoiceItem'
import { MarkdownComponent } from '../../src-object'
import MultipleChoiceItemComponent from './item/MultipleChoiceItemComponent'
import useArrayShuffle from '../../../hooks/useArrayShuffle'
import { ExerciseProps } from '../types/ExerciseProps'
import IMultipleChoiceExercise from './types/IMultipleChoiceExercise'
import IMultipleChoiceAnswer from './types/IMultipleChoiceAnswer'

interface IMultipleChoiceComponentProps extends ExerciseProps {
    exerciseObject: IMultipleChoiceExercise,
    onAnswerChanges: (value: IMultipleChoiceAnswer) => void
}
const MultipleChoiceComponent = (props: IMultipleChoiceComponentProps) => {
    const mc = props.exerciseObject;
    const [selectedItems,setItemsAnswers] = useState<string[]>(mc.metadata?.initialAnswer?.answer ?? [])
    const items = useMemo(()=> {
        return mc.metadata?.random ? useArrayShuffle(mc.items) : mc.items;
    },[mc.metadata?.random, mc.items])

    useEffect(() => {
        props.onAnswerChanges({exerciseId: mc.id, answer:selectedItems});
    }, [selectedItems, props.onAnswerChanges]);

    const onMultipleChoiceItemChange = (id:string, checked:boolean) => {
        if(!mc.metadata?.multi){
            return setItemsAnswers([id])
        }
        if(!checked){
            return setItemsAnswers(selectedItems.filter(item => item !== id))
        }
        setItemsAnswers([...selectedItems, id]);
    }
    const incorrectAnswers = selectedItems.filter(item => {
        if(!mc.metadata?.correctAnswers || mc.metadata.correctAnswers?.length === 0){
            return false;
        }
        return mc.metadata.correctAnswers?.indexOf(item) < 0;
    })
    
    const isIncorrect = (item: IMultipleChoiceItem) => {
        const showResult = mc.metadata?.showEvaluation && mc.metadata.correctAnswers && mc.metadata.correctAnswers.length > 0;
        if(!mc.metadata?.multi){
            return showResult && incorrectAnswers.length > 0
        }
        return showResult && incorrectAnswers.indexOf(item.id)>=0
    }

    const itemComponents = items.map(item => <MultipleChoiceItemComponent 
        onChange={onMultipleChoiceItemChange} 
        key={item.id} 
        parentId={mc.id} 
        item={item} 
        config={{
            multi: mc.metadata?.multi,
            incorrect: isIncorrect(item),
            disabled: mc.metadata?.disabled,
            defaultChecked: selectedItems.indexOf(item.id) !== -1
        }}
    />);

    return <>
        <MarkdownComponent {...mc.description}></MarkdownComponent>
        {itemComponents}
    </>
}
export default MultipleChoiceComponent
