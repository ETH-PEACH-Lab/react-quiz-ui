import React from 'react'
import IMultipleChoiceItem from '../types/IMultipleChoiceItem'
import { SrcObjectComponent } from '../../../src-object'

type MultipleChoiceItemComponentProps = {
    item: IMultipleChoiceItem,
    multi?: boolean,
    parentId: string,
    onChange: (id:string, checked:boolean) => void
}
const MultipleChoiceItemComponent = (props: MultipleChoiceItemComponentProps) => {
    return <div className="form-control">
                <label className="cursor-pointer label">
                <span className="label-text"><SrcObjectComponent object={props.item} /></span>
                {props.multi && <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" onChange={event => props.onChange(props.item.id,event.target.checked)}/>}
                {!props.multi && <input type="radio" name={props.parentId} className="radio radio-accent radio-sm" onChange={event => props.onChange(props.item.id,event.target.checked)}/>}
                </label>
            </div>
}

export default MultipleChoiceItemComponent
