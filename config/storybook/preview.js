import { TranslateDecorator } from '../../src/shared/lib/storybook/decorators/TranslateDecorator';
import { Theme } from '../../src/shared/theme/ThemeContext';
import { StyleDecorator } from '../../src/shared/lib/storybook/decorators/StyleDecorator';
import { RouterDecorator } from '../../src/shared/lib/storybook/decorators/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
        ],
    },
};

export const decorators = [StyleDecorator, RouterDecorator, TranslateDecorator];
