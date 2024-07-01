import { default as React } from '../../../../../node_modules/react';
import { IMultipleChoiceItemConfig } from './types/IMultipleChoiceItemConfig';
import { IMultipleChoiceItem } from './types';

interface MultipleChoiceItemComponentProps {
    item: IMultipleChoiceItem;
    parentId: string;
    config: IMultipleChoiceItemConfig;
    onChange: (id: string, checked: boolean) => void;
}
export declare const MultipleChoiceItemComponent: React.FC<MultipleChoiceItemComponentProps>;
export {};
