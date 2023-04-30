import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchArticles } from './SearchArticles';

export default {
    title: 'feature/SearchArticles',
    component: SearchArticles,
    argTypes: {},
} as ComponentMeta<typeof SearchArticles>;

const Template: ComponentStory<typeof SearchArticles> = args => <SearchArticles {...args} />;

export const Default = Template.bind({});
Default.args = {};
