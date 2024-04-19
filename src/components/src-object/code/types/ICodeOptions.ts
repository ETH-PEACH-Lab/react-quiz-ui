import { editor } from "monaco-editor";
import { ISrcObjectOptions } from "../../types/ISrcObjectOptions";

export interface ICodeOptions extends ISrcObjectOptions{
    onCodeChange?: (value:string )=> void,
    options?: editor.IStandaloneDiffEditorConstructionOptions,
    fullHeight?: boolean,
    theme?: "vs-dark" | "light"
}