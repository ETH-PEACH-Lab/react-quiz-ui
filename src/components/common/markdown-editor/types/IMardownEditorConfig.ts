import { type IExtendedCodeConfig } from '../../../src-elements/code/types/IExtendedCodeConfig';
import { type IMarkdownConfig } from '../../../src-elements/markdown/types';

export interface IMarkdownEditorConfig {
  solutionMarkdownClassName?: string;
  alignVertical?: boolean;
  tabs?: boolean;
  jupyter?: boolean;
  codeConfig?: IExtendedCodeConfig;
  markdownConfig?: IMarkdownConfig;
}
