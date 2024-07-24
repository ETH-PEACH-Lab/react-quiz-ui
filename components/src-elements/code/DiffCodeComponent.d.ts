import { editor } from 'monaco-editor';
import { ICodeConfig } from './types';
import { default as React } from '../../../../node_modules/react';
import { Monaco } from '@monaco-editor/react';

interface DiffCodeComponentProps {
    original: string;
    modified: string;
    language: string;
    focused?: boolean;
    config?: ICodeConfig;
    onMount?: (editor: editor.IStandaloneDiffEditor) => void;
    beforeMount?: (monaco: Monaco) => void;
}
export declare const DiffCodeComponent: React.FC<DiffCodeComponentProps>;
export default DiffCodeComponent;
