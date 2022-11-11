import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';

import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>TEST</Button>;

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    theme: ButtonTheme.OUTLINED,
};

export const DarkClear = Template.bind({});
DarkClear.args = {
    theme: ButtonTheme.CLEAR,
};
DarkClear.decorators = [getThemeDecorator(Theme.DARK)];

export const DarkOutlined = Template.bind({});
DarkOutlined.args = {
    theme: ButtonTheme.OUTLINED,
};
DarkOutlined.decorators = [getThemeDecorator(Theme.DARK)];
