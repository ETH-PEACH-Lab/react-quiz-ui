import { IMarkdownConfig } from './types/IMarkdownConfig';
import { default as React } from '../../../../node_modules/react';

interface MarkdownComponentProps {
    config?: IMarkdownConfig;
    src: string;
    className?: string;
}
export declare const MarkdownComponent: React.FC<MarkdownComponentProps>;
export {};
