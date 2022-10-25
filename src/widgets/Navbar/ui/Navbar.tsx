import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    toggleTheme: () => void;
};

export const Navbar: FC<NavbarProps> = ({ className, toggleTheme }) => {
    return (
        <div className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
            </div>
        </div>
    );
};

