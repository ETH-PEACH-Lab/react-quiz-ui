import React from 'react'
import { MarkdownComponent, adjustableHeightCodeOptions } from '../../src-object'
import { IMarkdownEditorConfig } from './types'
import CodeComponent from '../../src-object/code/CodeComponent'

type MarkdownEditorComponentProps = {
    src: string,
    config?: IMarkdownEditorConfig
    onChange: (value:string) => void
}
const MarkdownEditorComponent = (props: MarkdownEditorComponentProps) => {
    const Code = <CodeComponent language='markdown' src={props.src} config={{options:props.config?.codeConfig}} onCodeChange={props.onChange}></CodeComponent>;
    const Markdown = <MarkdownComponent src={props.src}></MarkdownComponent>
    return <div className={"grid gap-4 " + (props.config?.alignVertical ? "": "grid-cols-2")}>
       {(props.config?.alignVertical ? Markdown : Code )}
       {(props.config?.alignVertical ? Code : Markdown )}
    </div>
}
MarkdownEditorComponent.defaultProps = {
    config: {
        alignVertical: false,
        codeConfig: {
            options: adjustableHeightCodeOptions
        }
    }
}
export default MarkdownEditorComponent
