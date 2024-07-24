import { IMarkdownEditorConfig } from './types';
import { default as React } from '../../../../node_modules/react';

export interface MarkdownEditorComponentProps {
    src: string;
    config?: IMarkdownEditorConfig;
    onChange: (value: string) => void;
}
export declare const MarkdownEditorComponent: React.FC<MarkdownEditorComponentProps>;
