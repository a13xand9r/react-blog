import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getStoreDecorator } from 'shared/lib/storybook/decorators/StoreDecorator';

import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {},
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [getStoreDecorator()];
