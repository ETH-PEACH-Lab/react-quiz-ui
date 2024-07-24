import { IMultipleChoiceItemColoring } from './IMultipleChoiceItemColoring';
import { IMarkdownConfig } from '../../../../src-elements/markdown/types';

export interface IMultipleChoiceItemConfig {
    showIndicator?: boolean;
    showEvaluation?: boolean;
    distribution?: {
        show?: boolean;
        number: number;
    };
    multi?: boolean;
    valid?: boolean;
    incorrectSelection?: boolean;
    disabled?: boolean;
    checked?: boolean;
    markdownConfig?: IMarkdownConfig;
    coloring?: IMultipleChoiceItemColoring;
}
