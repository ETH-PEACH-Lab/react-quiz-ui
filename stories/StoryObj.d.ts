import { TypeWithDeepControls } from 'storybook-addon-deep-controls';
import { StoryAnnotations } from '@storybook/types';

export type DeepStoryObj<T extends Pick<StoryAnnotations, 'argTypes'>> = TypeWithDeepControls<T> & {
    name?: string;
};
