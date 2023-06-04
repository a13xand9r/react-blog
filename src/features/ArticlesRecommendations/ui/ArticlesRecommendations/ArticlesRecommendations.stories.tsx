import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getStoreDecorator } from 'shared/lib/storybook/decorators/StoreDecorator';

import { ArticlesRecommendations } from './ArticlesRecommendations';

export default {
    title: 'features/ArticlesRecommendations',
    component: ArticlesRecommendations,
    argTypes: {},
} as ComponentMeta<typeof ArticlesRecommendations>;

const Template: ComponentStory<typeof ArticlesRecommendations> = (args) => (
    <ArticlesRecommendations {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [getStoreDecorator()];
