import { default as React } from '../../../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';
import { MultipleChoiceItemDistribution } from '../../../../components';

type MultipleChoiceComponentPropsAndCustomArgs = React.ComponentProps<typeof MultipleChoiceItemDistribution>;
declare const meta: Meta<MultipleChoiceComponentPropsAndCustomArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const First: Story;
export declare const Second: Story;
export declare const Third: Story;
