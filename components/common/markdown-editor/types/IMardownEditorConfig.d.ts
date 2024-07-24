import { IMarkdownConfig } from '../../../src-elements/markdown/types';
import { IExtendedCodeConfig } from '../../../src-elements/code/types/IExtendedCodeConfig';

export interface IMarkdownEditorConfig {
    solutionMarkdownClassName?: string;
    alignVertical?: boolean;
    tabs?: boolean;
    jupyter?: boolean;
    codeConfig?: IExtendedCodeConfig;
    markdownConfig?: IMarkdownConfig;
}
