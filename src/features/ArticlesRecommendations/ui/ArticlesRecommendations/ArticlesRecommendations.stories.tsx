import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
