import type {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Parameters as _,
    StoryAnnotations,
  } from "@storybook/types";
import type { TypeWithDeepControls } from "storybook-addon-deep-controls";
export type  StoryObj<T extends Pick<StoryAnnotations, "argTypes">> = TypeWithDeepControls<T> & {
    name?: string
}