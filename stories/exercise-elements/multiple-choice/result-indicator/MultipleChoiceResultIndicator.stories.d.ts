import { MultipleChoiceResultIndicatorComponent } from '../../../../components';
import { Meta, StoryObj } from '@storybook/react';
import { default as React } from '../../../../../node_modules/react';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceResultIndicatorComponent> & {
    descriptionText: string;
};
declare const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const First: Story;
export declare const Second: Story;
