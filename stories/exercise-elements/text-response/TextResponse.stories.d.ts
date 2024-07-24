import { default as React } from '../../../../node_modules/react';
import { TextResponseComponent } from '../../../components/exercise-elements/text-response/TextResponseComponent';
import { Meta, StoryObj } from '@storybook/react';

type TextResponseComponentPropsAndCustomArgs = React.ComponentProps<typeof TextResponseComponent>;
declare const meta: Meta<TextResponseComponentPropsAndCustomArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
