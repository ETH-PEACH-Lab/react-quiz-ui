import { IExtendedCodeConfig } from './types/IExtendedCodeConfig';
import { default as React } from '../../../../node_modules/react';
import { editor } from 'monaco-editor';
import { Monaco } from '@monaco-editor/react';

interface CodeComponentProps {
    referenceId?: string;
    src: string;
    language: string;
    onCodeChange?: (value: string, referenceId?: string) => void;
    focused?: boolean;
    config?: IExtendedCodeConfig;
    onMount?: (editor: editor.IStandaloneCodeEditor) => void;
    beforeMount?: (monaco: Monaco) => void;
}
export declare const CodeComponent: React.FC<CodeComponentProps>;
export {};
