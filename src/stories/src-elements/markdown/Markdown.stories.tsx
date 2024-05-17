import { type Meta, type StoryObj } from '@storybook/react';
import { MarkdownComponent } from '../../../components';

const meta: Meta<typeof MarkdownComponent> = {
  title: 'src-elements/markdown/MarkdownComponent',
  component: MarkdownComponent,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Simple h2',
  args: {
    src: '## Test',
  },
};
export const Secondary: Story = {
  name: 'Simple multiline',
  args: {
    src: 'Hello' + '\nWorld\n' + '...',
  },
};
export const Third: Story = {
  name: 'Simple math',
  args: {
    src: '$a*x^2+b*x+c = 0$',
  },
};
