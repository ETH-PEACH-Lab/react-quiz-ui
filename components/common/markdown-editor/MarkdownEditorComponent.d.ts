import { default as React } from '../../../../node_modules/react';
import { IMarkdownEditorConfig } from './types';

export interface MarkdownEditorComponentProps {
    src: string;
    config?: IMarkdownEditorConfig;
    onChange: (value: string) => void;
}
export declare const MarkdownEditorComponent: React.FC<MarkdownEditorComponentProps>;
