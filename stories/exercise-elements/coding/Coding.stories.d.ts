import { Meta } from '@storybook/react';
import { CodingComponent } from '../../../components/exercise-elements/coding/CodingComponent';
import { DeepStoryObj } from '../../StoryObj';
import { default as React } from '../../../../node_modules/react';

type CodingComponentPropsAndCustomArgs = React.ComponentProps<typeof CodingComponent>;
declare const meta: Meta<CodingComponentPropsAndCustomArgs>;
export default meta;
type Story = DeepStoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Third: Story;
