import { Meta, StoryObj } from '@storybook/react';
import { TextResponseComponent } from '../../../components/exercise-elements/text-response/TextResponseComponent';
import { default as React } from '../../../../node_modules/react';

type TextResponseComponentPropsAndCustomArgs = React.ComponentProps<typeof TextResponseComponent>;
declare const meta: Meta<TextResponseComponentPropsAndCustomArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
