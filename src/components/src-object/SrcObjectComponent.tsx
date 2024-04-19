import React, { useContext } from "react"
import { ISrcObject } from "./types/ISrcObject"
import { ISrcObjectOptions } from "./types/ISrcObjectOptions"
import { getComponent } from "./registerComponent"
import { getDefaultComponentOptions } from "./registerComponentOptions"

type SrcObjectComponentProps = {
    object: ISrcObject,
    options?: ISrcObjectOptions
}
export const SrcObjectComponent = (props: SrcObjectComponentProps) => {
    const Component = getComponent(props.object.type);
    const options = props.options ?? getDefaultComponentOptions(props.object.type);
    if(Component){
        return <Component {...props.object} options={options}></Component>
    }
    return <></>
}