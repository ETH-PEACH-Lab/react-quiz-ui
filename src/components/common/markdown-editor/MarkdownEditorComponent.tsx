import React from 'react'
import { ICodeOptions, MarkdownComponent } from '../../src-object'
import CodeComponent, { oneLinerCodeOptions } from '../../src-object/code/CodeComponent'
type MarkdownEditorComponentProps = {
    value: string,
    alignVertical?: boolean,
    onChange: (value:string) => void
    codeOptions?: ICodeOptions
}
const MarkdownEditorComponent = (props: MarkdownEditorComponentProps) => {
    return <div className={"grid gap-4 " + (props.alignVertical ? "": "grid-cols-2")}>
        <CodeComponent language='markdown' src={props.value} options={props.codeOptions ?? {options:oneLinerCodeOptions}} onCodeChange={props.onChange}></CodeComponent>
        <MarkdownComponent src={props.value}></MarkdownComponent>
    </div>
}

export default MarkdownEditorComponent
