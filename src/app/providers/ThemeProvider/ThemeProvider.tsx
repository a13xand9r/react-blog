import { FC, ReactNode, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { Theme, ThemeContext } from '@/shared/theme/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

    document.body.className = theme;

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
