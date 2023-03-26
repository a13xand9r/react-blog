import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [getThemeDecorator(Theme.DARK)];
