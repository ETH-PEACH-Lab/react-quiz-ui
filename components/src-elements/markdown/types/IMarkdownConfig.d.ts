import type * as unified from 'unified';
export interface IMarkdownConfig {
    rehypePlugins: unified.PluggableList;
    remarkPlugins?: unified.PluggableList;
}
