import { Story } from '@storybook/react';
import { Theme } from 'shared/theme/ThemeContext';

export const getThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
