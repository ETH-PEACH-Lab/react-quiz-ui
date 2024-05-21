import { type IMarkdownConfig } from '../../../../src-elements/markdown/types';
import { type IMultipleChoiceItemColoring } from './IMultipleChoiceItemColoring';

export interface IMultipleChoiceItemConfig {
  multi?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  markdownConfig?: IMarkdownConfig;
  coloring?: IMultipleChoiceItemColoring;
}
