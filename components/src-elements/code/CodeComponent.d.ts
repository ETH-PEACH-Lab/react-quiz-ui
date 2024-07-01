import { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { default as React } from '../../../../node_modules/react';
import { IExtendedCodeConfig } from './types/IExtendedCodeConfig';

interface CodeComponentProps {
    src: string;
    language: string;
    onCodeChange?: (value: string) => void;
    focused?: boolean;
    config?: IExtendedCodeConfig;
    onMount?: (editor: editor.IStandaloneCodeEditor) => void;
    beforeMount?: (monaco: Monaco) => void;
}
export declare const CodeComponent: React.FC<CodeComponentProps>;
export {};
