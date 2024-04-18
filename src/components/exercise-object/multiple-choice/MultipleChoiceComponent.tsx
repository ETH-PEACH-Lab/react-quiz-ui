import React, { useState } from 'react'
import IMultipleChoiceItem from './types/IMultipleChoiceItem'
import { ISrcObject, SrcObjectComponent } from '../../src-object'
import MultipleChoiceItemComponent from './item/MultipleChoiceItemComponent'

type MultipleChoiceComponentProps = {
    id: string
    description: ISrcObject
    items: IMultipleChoiceItem[]
    multi?: boolean
}
const MultipleChoiceComponent = (props: MultipleChoiceComponentProps) => {
    const [selectedItems,setItemsAnswers] = useState<string[]>([])
    const onMultipleChoiceItemChange = (id:string, checked:boolean) => {
        if(!checked){
            return setItemsAnswers(selectedItems.filter(item => item !== id))
        }
        setItemsAnswers([...selectedItems, id]);
    }
    const itemComponents = props.items.map(item => <MultipleChoiceItemComponent onChange={onMultipleChoiceItemChange} key={item.id} parentId={props.id} item={item} multi={props.multi} />);
    return <>
        <SrcObjectComponent object={props.description}></SrcObjectComponent>
        {itemComponents}
    </>
}

export default MultipleChoiceComponent
