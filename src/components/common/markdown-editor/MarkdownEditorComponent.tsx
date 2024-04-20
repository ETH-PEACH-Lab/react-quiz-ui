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
    const Code = <CodeComponent language='markdown' src={props.value} options={props.codeOptions ?? {options:oneLinerCodeOptions}} onCodeChange={props.onChange}></CodeComponent>;
    const Markdown = <MarkdownComponent src={props.value}></MarkdownComponent>
    return <div className={"grid gap-4 " + (props.alignVertical ? "": "grid-cols-2")}>
       {(props.alignVertical ? Markdown : Code )}
       {(props.alignVertical ? Code : Markdown )}
    </div>
}

export default MarkdownEditorComponent
