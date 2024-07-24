import { DeepStoryObj } from '../../../StoryObj';
import { DiffCodeComponent } from '../../../../components/src-elements/code';
import { Meta } from '@storybook/react';

/**
 * Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples.
 */
declare const meta: Meta<typeof DiffCodeComponent>;
export default meta;
type Story = DeepStoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Third: Story;
export declare const Forth: Story;
export declare const Fifth: Story;
