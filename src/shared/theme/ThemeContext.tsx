import { createContext, FC, useContext, useMemo, useState } from 'react';

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

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
};

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
