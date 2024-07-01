import { StoryAnnotations } from '@storybook/types';
import { TypeWithDeepControls } from 'storybook-addon-deep-controls';

export type DeepStoryObj<T extends Pick<StoryAnnotations, 'argTypes'>> = TypeWithDeepControls<T> & {
    name?: string;
};
