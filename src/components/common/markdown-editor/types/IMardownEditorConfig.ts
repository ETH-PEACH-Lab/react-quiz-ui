import { type ICodeConfig } from '../../../src-elements';
import { type IMarkdownConfig } from '../../../src-elements/markdown/types';

export interface IMarkdownEditorConfig {
  alignVertical?: boolean;
  tabs?: boolean;
  jupyter?: boolean;
  codeConfig?: ICodeConfig;
  markdownConfig?: IMarkdownConfig;
}
