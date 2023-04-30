import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesViewSelector } from './ArticlesViewSelector';

export default {
    title: 'features/ArticlesViewSelector',
    component: ArticlesViewSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticlesViewSelector>;

const Template: ComponentStory<typeof ArticlesViewSelector> = args => (
    <ArticlesViewSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {};
