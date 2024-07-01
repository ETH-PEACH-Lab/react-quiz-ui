import { IMarkdownConfig } from '../../../../src-elements/markdown/types';
import { IMultipleChoiceItemColoring } from './IMultipleChoiceItemColoring';

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
