import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Title.module.scss';

export const enum TitleTheme {
    DEFAULT = 'default',
    ERROR = 'error',
}

type TitleSize = 's' | 'm' | 'l' | 'xl';

interface TitleProps {
    className?: string;
    theme?: TitleTheme;
    size?: TitleSize;
    center?: boolean;
}

export const Title: FC<TitleProps> = ({
    className,
    children,
    center,
    size = 'm',
    theme = TitleTheme.DEFAULT,
}) => {
    return (
        <h2
            className={classNames(className, styles.Title, styles[theme], styles[size], {
                [styles.center]: center,
            })}
        >
            {children}
        </h2>
    );
};
