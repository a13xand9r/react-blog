import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';

import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    placeholder: 'Введите пароль',
    value: 'qwerty 123',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Введите пароль',
    value: 'qwerty 123',
};
Dark.decorators = [getThemeDecorator(Theme.DARK)];
