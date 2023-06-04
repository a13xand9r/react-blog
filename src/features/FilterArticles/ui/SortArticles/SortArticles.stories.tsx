import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SortArticles } from './SortArticles';

export default {
    title: 'shared/SortArticles',
    component: SortArticles,
    argTypes: {},
} as ComponentMeta<typeof SortArticles>;

const Template: ComponentStory<typeof SortArticles> = (args) => <SortArticles {...args} />;

export const Default = Template.bind({});
Default.args = {};
