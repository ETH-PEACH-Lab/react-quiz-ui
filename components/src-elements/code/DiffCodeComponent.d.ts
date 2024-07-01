import { Monaco } from '@monaco-editor/react';
import { default as React } from '../../../../node_modules/react';
import { ICodeConfig } from './types';
import { editor } from 'monaco-editor';

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
