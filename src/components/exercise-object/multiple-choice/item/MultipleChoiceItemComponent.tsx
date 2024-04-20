import React from 'react'
import IMultipleChoiceItem from '../types/IMultipleChoiceItem'
import { MarkdownComponent } from '../../../src-object'

type MultipleChoiceItemComponentProps = {
    item: IMultipleChoiceItem,
    multi?: boolean,
    parentId: string,
    onChange: (id:string, checked:boolean) => void
    incorrect?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
}
const MultipleChoiceItemComponent = (props: MultipleChoiceItemComponentProps) => {
    return <div className="form-control">
                <label className="cursor-pointer label">
                    <MarkdownComponent {...props.item} />
                    <div className='ml-4 my-auto flex'>

                    {props.multi && <input type="checkbox" disabled={props.disabled} 
                        className={"checkbox checkbox-sm " + (!props.incorrect ?  "checkbox-accent" : "checkbox-error")}
                        onChange={event => props.onChange(props.item.id,event.target.checked)} defaultChecked={props.defaultChecked}/>}

                    {!props.multi && <input type="radio" disabled={props.disabled} name={props.parentId} 
                        className={"radio radio-sm " + (!props.incorrect ?  "radio-accent" : "radio-error")} 
                        onChange={event => props.onChange(props.item.id,event.target.checked)} defaultChecked={props.defaultChecked}/>}

                    </div>
                </label>
            </div>
}

export default MultipleChoiceItemComponent
