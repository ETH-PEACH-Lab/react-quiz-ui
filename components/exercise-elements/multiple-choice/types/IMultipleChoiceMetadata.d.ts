import { IMultipleChoiceItemColoring } from '../item';
import { IMarkdownConfig } from '../../../src-elements';

export interface IMultipleChoiceMetadata {
    showEvaluation?: boolean;
    showIndicator?: boolean;
    multi?: boolean;
    random?: boolean;
    disabled?: boolean;
    distribution?: {
        show?: boolean;
        perItem: Record<string, number>;
    };
    markdownConfig?: IMarkdownConfig;
    multipleChoiceItemColoring?: IMultipleChoiceItemColoring;
}
