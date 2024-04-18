import React from "react"
import { ISrcObject } from "./types/ISrcObject"
import { MarkdownComponent } from "./markdown"

type SrcObjectComponentProps = {
    object: ISrcObject
}
const componentMap: {[key:string]:React.ComponentType<any>}={
    markdown: MarkdownComponent
}
export const SrcObjectComponent = (props: SrcObjectComponentProps) => {
    const ComponentToRender = componentMap[props.object.type];
    if (!ComponentToRender) {
        console.warn(`Unknown object.type: ${props.object.type}`);
        return null;
      }
    return <ComponentToRender {...props.object} />
}