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
    center?: boolean;
};

export const Title: FC<TitleProps> = ({ className, children, center, theme = TitleTheme.DEFAULT }) => {
    return (
        <h2 className={classNames(className, styles.Title, styles[theme], {[styles.center]: center})}>{children}</h2>
    );
};
