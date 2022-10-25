import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';
import LightIcon from 'shared/assets/icons/light-theme.svg';
import DarkIcon from 'shared/assets/icons/dark-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useThemeContext } from 'shared/theme/ThemeContext';

interface NavbarProps {
    className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const {theme, toggleTheme} = useThemeContext();

    return (
        <div className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
                    {theme === Theme.DARK ?
                        <DarkIcon width={30} /> :
                        <LightIcon width={30} />
                    }
                </Button>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
            </div>
        </div>
    );
};

