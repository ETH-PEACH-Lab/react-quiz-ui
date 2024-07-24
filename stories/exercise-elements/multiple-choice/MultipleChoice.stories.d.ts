import { DeepStoryObj } from '../../StoryObj';
import { MultipleChoiceComponent } from '../../../components/exercise-elements/multiple-choice/MultipleChoiceComponent';
import { Meta } from '@storybook/react';
import { default as React } from '../../../../node_modules/react';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceComponent> & {
    itemsCount: number;
};
declare const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs>;
export default meta;
type Story = DeepStoryObj<typeof meta>;
export declare const First: Story;
export declare const Second: Story;
export declare const Third: Story;
export declare const Forth: Story;
export declare const Fifth: Story;
export declare const Sixth: Story;
export declare const Seventh: Story;
export declare const Eighth: Story;
export declare const Ninth: Story;
export declare const Tenth: Story;
