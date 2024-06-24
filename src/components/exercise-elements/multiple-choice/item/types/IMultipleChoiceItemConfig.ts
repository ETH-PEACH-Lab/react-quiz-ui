import { type IMarkdownConfig } from '../../../../src-elements/markdown/types';
import { type IMultipleChoiceItemColoring } from './IMultipleChoiceItemColoring';

export interface IMultipleChoiceItemConfig {
  showIndicator?: boolean;
  showEvaluation?: boolean;
  distribution?: {
    show?: boolean;
    number: number;
  };
  multi?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
  checked?: boolean;
  markdownConfig?: IMarkdownConfig;
  coloring?: IMultipleChoiceItemColoring;
}
