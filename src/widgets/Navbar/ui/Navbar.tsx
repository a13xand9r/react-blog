import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>about</AppLink>
            </div>
        </div>
    );
};

