import { Meta } from '@storybook/react';
import { CodeComponent } from '../../../../components/src-elements/code';
import { DeepStoryObj } from '../../../StoryObj';

/**
 * Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples.
 */
declare const meta: Meta<typeof CodeComponent>;
export default meta;
type Story = DeepStoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
