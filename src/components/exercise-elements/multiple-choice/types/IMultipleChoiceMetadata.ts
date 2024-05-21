import { type IMarkdownConfig } from '../../../src-elements';
import { type IMultipleChoiceItemColoring } from '../item';

export interface IMultipleChoiceMetadata {
  correctAnswers?: string[];
  showEvaluation?: boolean;
  multi?: boolean;
  random?: boolean;
  disabled?: boolean;
  markdownConfig?: IMarkdownConfig;
  multipleChoiceItemColoring?: IMultipleChoiceItemColoring;
}
