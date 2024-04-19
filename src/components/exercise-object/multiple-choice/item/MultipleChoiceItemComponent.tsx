import React from 'react'
import IMultipleChoiceItem from '../types/IMultipleChoiceItem'
import { SrcObjectComponent } from '../../../src-object'

type MultipleChoiceItemComponentProps = {
    item: IMultipleChoiceItem,
    multi?: boolean,
    parentId: string,
    onChange: (id:string, checked:boolean) => void
    incorrect?: boolean;
}
const MultipleChoiceItemComponent = (props: MultipleChoiceItemComponentProps) => {
    return <div className="form-control">
 
                <label className="cursor-pointer label">
                    <SrcObjectComponent object={props.item} />
                    <div className='ml-4 my-auto flex'>
                    {props.multi && <input type="checkbox" className={"checkbox checkbox-sm " + (!props.incorrect ?  "checkbox-accent" : "checkbox-error")}
                        onChange={event => props.onChange(props.item.id,event.target.checked)}/>}
                    {!props.multi && <input type="radio" name={props.parentId} className={"radio radio-sm " + (!props.incorrect ?  "radio-accent" : "radio-error")} onChange={event => props.onChange(props.item.id,event.target.checked)}/>}

                    </div>
                </label>

  
            </div>
}

export default MultipleChoiceItemComponent
