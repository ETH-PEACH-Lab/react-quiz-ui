import { DeepStoryObj } from '../../StoryObj';
import { MarkdownEditorComponent } from '../../../components/common/markdown-editor/MarkdownEditorComponent';
import { default as React } from '../../../../node_modules/react';
import { Meta } from '@storybook/react';

type MarkdownEditorComponentPropsAndCustomArgs = React.ComponentProps<typeof MarkdownEditorComponent>;
/**
 * This editor showcases an editing view for markdown code.
 * **The state has to be managed by the parent component.**
 */
declare const meta: Meta<MarkdownEditorComponentPropsAndCustomArgs>;
export default meta;
type Story = DeepStoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Third: Story;
export declare const Forth: Story;
