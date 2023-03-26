import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCardsList } from './ArticleCardsList';

export default {
    title: 'entities/Article/ArticleCardsList',
    component: ArticleCardsList,
    argTypes: {},
} as ComponentMeta<typeof ArticleCardsList>;

const Template: ComponentStory<typeof ArticleCardsList> = args => <ArticleCardsList {...args} />;

export const Default = Template.bind({});
Default.args = {};
