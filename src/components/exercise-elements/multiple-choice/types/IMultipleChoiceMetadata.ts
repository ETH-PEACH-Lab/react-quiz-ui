import { type IMarkdownConfig } from '../../../src-elements';

export interface IMultipleChoiceMetadata {
  correctAnswers?: string[];
  showEvaluation?: boolean;
  multi?: boolean;
  random?: boolean;
  disabled?: boolean;
  markdownConfig?: IMarkdownConfig;
}
