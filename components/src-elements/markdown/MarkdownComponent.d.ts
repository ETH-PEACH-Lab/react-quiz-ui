import { default as React } from '../../../../node_modules/react';
import { IMarkdownConfig } from './types/IMarkdownConfig';

interface MarkdownComponentProps {
    config?: IMarkdownConfig;
    src: string;
    className?: string;
}
export declare const MarkdownComponent: React.FC<MarkdownComponentProps>;
export {};
