import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => (
    <AppLink {...args}>TEST</AppLink>
);

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [getThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [getThemeDecorator(Theme.DARK)];
