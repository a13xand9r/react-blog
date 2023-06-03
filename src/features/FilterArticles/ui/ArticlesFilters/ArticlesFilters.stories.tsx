import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';

export default {
    title: 'shared/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {},
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Default = Template.bind({});
Default.args = {};
