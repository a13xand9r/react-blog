import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfiniteArticlesList } from './InfiniteArticlesList';

export default {
    title: 'shared/InfiniteArticlesList',
    component: InfiniteArticlesList,
    argTypes: {},
} as ComponentMeta<typeof InfiniteArticlesList>;

const Template: ComponentStory<typeof InfiniteArticlesList> = (args) => (
    <InfiniteArticlesList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
