import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Title.module.scss';

export const enum TitleTheme {
    DEFAULT = 'default',
    ERROR = 'error',
}

interface TitleProps {
    className?: string;
    theme?: TitleTheme;
};

export const Title: FC<TitleProps> = ({ className, children, theme = TitleTheme.DEFAULT }) => {
    return (
        <h2 className={classNames(className, styles.Title, styles[theme])}>{children}</h2>
    );
};
