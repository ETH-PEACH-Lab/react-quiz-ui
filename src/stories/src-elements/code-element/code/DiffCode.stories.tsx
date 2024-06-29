import { type Meta } from '@storybook/react';
import {
  DiffCodeComponent,
  adjustableHeightCodeOptions,
} from '../../../../components/src-elements/code';
import { type DeepStoryObj } from '../../../StoryObj';
/**
 * Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples.
 */
const meta: Meta<typeof DiffCodeComponent> = {
  component: DiffCodeComponent,
};
export default meta;
type Story = DeepStoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Simple javascript',
  args: {
    original: 'let x = 5',
    modified: 'let x = 10',
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
    original: 'Hello' + '\nWorld\n' + '...',
    modified: 'Hello' + '\nBob\n' + '...',
    language: 'text',
    config: {
      options: adjustableHeightCodeOptions,
    },
  },
};

export const Third: Story = {
  name: 'More multiline',
  args: {
    original:
      'Hello\nWorld\nThis is a test.\nLine four.\nLine five.\nLine six.\nLine seven.\nLine eight.\nLine nine.\nLine ten.\nLine eleven.\nLine twelve.\nLine thirteen.\nLine fourteen.\nLine fifteen.\nLine sixteen.\nLine seventeen.\nLine eighteen.\nLine nineteen.\nLine twenty.\n',
    modified:
      'Hello\nBob\nThis is a test.\nLine four.\nLine 5.\nLine six.\nLine seven.\nLine eight.\nLine nine.\nLine ten.\nLine eleven.\nLine twelve.\nLine 13.\nLine fourteen.\nLine fifteen.\nLine sixteen.\nLine 17.\nLine eighteen.\nLine nineteen.\nLine twenty.\n',
    language: 'text',
    config: {
      options: adjustableHeightCodeOptions,
    },
  },
};
