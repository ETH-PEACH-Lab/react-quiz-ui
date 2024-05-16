import { type Meta } from '@storybook/react';
import {
  CodeComponent,
  adjustableHeightCodeOptions,
} from '../../../../components/src-elements/code/CodeComponent';
import { type DeepStoryObj } from '../../../StoryObj';
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
