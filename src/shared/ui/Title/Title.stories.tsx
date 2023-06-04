import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';

import { Title, TitleTheme } from './Title';

export default {
    title: 'shared/Title',
    component: Title,
    argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Заголовок статьи',
};
export const ErrorLight = Template.bind({});
ErrorLight.args = {
    children: 'Ошибка. Неверный логин или пароль',
    theme: TitleTheme.ERROR,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Заголовок статьи',
};
Dark.decorators = [getThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    children: 'Ошибка. Неверный логин или пароль',
    theme: TitleTheme.ERROR,
};
ErrorDark.decorators = [getThemeDecorator(Theme.DARK)];
