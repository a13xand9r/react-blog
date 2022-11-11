import { Theme } from '../../src/shared/theme/ThemeContext';
import { StyleDecorator } from '../../src/shared/lib/storybook/decorators/StyleDecorator';
import { getThemeDecorator } from '../../src/shared/lib/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/lib/storybook/decorators/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    StyleDecorator,
    getThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];
