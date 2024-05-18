import { type IMarkdownConfig } from '../../../../src-elements/markdown/types';

export interface IMultipleChoiceItemConfig {
  multi?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  markdownConfig?: IMarkdownConfig;
}
