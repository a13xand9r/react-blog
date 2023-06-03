import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterArticlesTypes } from './FilterArticlesTypes';

export default {
    title: 'shared/FilterArticlesTypes',
    component: FilterArticlesTypes,
    argTypes: {},
} as ComponentMeta<typeof FilterArticlesTypes>;

const Template: ComponentStory<typeof FilterArticlesTypes> = (args) => (
    <FilterArticlesTypes {...args} />
);

export const Default = Template.bind({});
Default.args = {};
