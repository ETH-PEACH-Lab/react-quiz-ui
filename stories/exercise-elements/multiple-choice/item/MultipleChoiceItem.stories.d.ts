import { default as React } from '../../../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';
import { MultipleChoiceItemComponent } from '../../../../components/exercise-elements/multiple-choice/item/MultipleChoiceItemComponent';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceItemComponent> & {
    descriptionText: string;
};
declare const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const First: Story;
export declare const Second: Story;
export declare const Third: Story;
export declare const Forth: Story;
export declare const Fifth: Story;
export declare const Sixth: Story;
