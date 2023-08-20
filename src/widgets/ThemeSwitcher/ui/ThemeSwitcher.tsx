import { FC, memo } from 'react';

import { Theme, useTheme } from '@/shared/theme/ThemeContext';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import LightIcon from '@/shared/assets/icons/light-theme.svg';
import DarkIcon from '@/shared/assets/icons/dark-theme.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={className} onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
            {theme === Theme.DARK ? <DarkIcon width={30} /> : <LightIcon width={30} />}
        </Button>
    );
});
