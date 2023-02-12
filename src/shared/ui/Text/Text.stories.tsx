import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    children:
        'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
};
export const ErrorLight = Template.bind({});
ErrorLight.args = {
    children: 'Ошибка. Неверный логин или пароль',
    theme: TextTheme.ERROR,
};

export const Dark = Template.bind({});
Dark.args = {
    children:
        'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
};
Dark.decorators = [getThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    children: 'Ошибка. Неверный логин или пароль',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [getThemeDecorator(Theme.DARK)];
