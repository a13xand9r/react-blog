import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getStoreDecorator } from 'shared/lib/storybook/decorators/StoreDecorator';

import { ArticlesFilters } from './ArticlesFilters';

export default {
    title: 'features/ArticleFilters/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {},
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [getStoreDecorator()];
