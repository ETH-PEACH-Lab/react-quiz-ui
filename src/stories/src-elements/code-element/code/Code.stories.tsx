import { type Meta } from '@storybook/react';
import {
  CodeComponent,
  adjustableHeightCodeOptions,
} from '../../../../components/src-elements/code';
import { type DeepStoryObj } from '../../../StoryObj';
import { fn } from '@storybook/test';
/**
 * Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples.
 */
const meta: Meta<typeof CodeComponent> = {
  component: CodeComponent,
};
export default meta;
type Story = DeepStoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Simple javascript',
  args: {
    src: 'let x = 5',
    language: 'javascript',
    config: {
      options: adjustableHeightCodeOptions,
    },
    onCodeChange: fn(),
  },
  argTypes: {
    'config.options': {
      control: false,
    },
  },
};
export const Secondary: Story = {
  name: 'Simple multiline',
  args: {
    src: 'Hello' + '\nWorld\n' + '...',
    language: 'javascript',
    config: {
      options: adjustableHeightCodeOptions,
    },
  },
};
