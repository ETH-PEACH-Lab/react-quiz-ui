import React, { useEffect, useMemo, useState } from 'react'
import IMultipleChoiceItem from './types/IMultipleChoiceItem'
import { ISrcObject, SrcObjectComponent } from '../../src-object'
import MultipleChoiceItemComponent from './item/MultipleChoiceItemComponent'
import IMultipleChoiceAnswer from './types/IMultipleChoiceAnswer'
import useArrayShuffle from '../../../hooks/useArrayShuffle'
type MultipleChoiceComponentProps = {
    id: string
    description: ISrcObject
    items: IMultipleChoiceItem[],
    correctAnswers?: string[]; 
    onSelectedItemsChange: (answer: IMultipleChoiceAnswer)=>void;
    showResult?: boolean;
    multi?: boolean,
    random?: boolean,
    itemsShown?: number,
}
const MultipleChoiceComponent = (props: MultipleChoiceComponentProps) => {
    const [selectedItems,setItemsAnswers] = useState<string[]>([])

    const items = useMemo(()=> {
        let i = props.random ? useArrayShuffle(props.items) : props.items;
        if(props.itemsShown !== undefined){
            let deleteAmount = i.length - props.itemsShown > 0 ?  i.length - props.itemsShown : 0;
            i.splice(i.length-deleteAmount,  deleteAmount)
        }
        return i as IMultipleChoiceItem[];
    },[props.random, props.items])

    useEffect(() => {
        props.onSelectedItemsChange({exerciseId: props.id, answers:selectedItems});
    }, [selectedItems, props.onSelectedItemsChange]);

    const onMultipleChoiceItemChange = (id:string, checked:boolean) => {
        if(!props.multi){
            return setItemsAnswers([id])
        }
        if(!checked){
            return setItemsAnswers(selectedItems.filter(item => item !== id))
        }
        setItemsAnswers([...selectedItems, id]);
    }
    const incorrectAnswers = selectedItems.filter(item => {
        if(!props.correctAnswers || props.correctAnswers?.length === 0){
            return false;
        }
        return props.correctAnswers?.indexOf(item) < 0;
    })
    
    const isIncorrect = (item: IMultipleChoiceItem) => {
        if(!props.multi){
            return props.showResult && incorrectAnswers.length > 0
        }
        return props.showResult && incorrectAnswers.indexOf(item.id)>=0
    }

    const itemComponents = items.map(item => <MultipleChoiceItemComponent onChange={onMultipleChoiceItemChange} key={item.id} 
        parentId={props.id} item={item} multi={props.multi} incorrect={isIncorrect(item)}/>);

    return <>
        <SrcObjectComponent object={props.description}></SrcObjectComponent>
        {itemComponents}
    </>
}
MultipleChoiceComponent.defaultProps = {
    correctAnswers: []
}
export default MultipleChoiceComponent
