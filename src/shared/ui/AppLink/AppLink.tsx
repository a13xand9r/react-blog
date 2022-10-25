import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
};

export const AppLink: FC<AppLinkProps> = ({ children, className, theme = AppLinkTheme.PRIMARY, ...props }) => {
    return (
        <Link {...props} className={classNames(className, styles.App, styles[theme])}>
            {children}
        </Link>
    );
};
