import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};

interface UseThemeReturn {
    theme: Theme;
    toggleTheme: () => void;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeContext = createContext<ThemeContextProps>({});

export const useThemeContext = (): UseThemeReturn => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [setTheme, theme]);

    return { theme, toggleTheme };
};

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        document.body.classList.remove(...Object.entries(Theme).map(([_, value]) => value));
        document.body.classList.add(theme);
        // document.body.classList.remove(Theme.DARK);
        // Object.entries(Theme).map(([_, value]) => value);
    }, [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
