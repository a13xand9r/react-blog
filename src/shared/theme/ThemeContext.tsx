import { createContext, useCallback, useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../consts/localstorage';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

interface UseThemeReturn {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const useTheme = (): UseThemeReturn => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [setTheme, theme]);

    return { theme: theme ?? Theme.LIGHT, toggleTheme };
};
