import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Title.module.scss';

export const enum TitleTheme {
    DEFAULT = 'default',
    ERROR = 'error',
}

type TitleSize = 's' | 'm' | 'l' | 'xl';
type OutTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
    className?: string;
    theme?: TitleTheme;
    size?: TitleSize;
    OutTag?: OutTagType;
    center?: boolean;
}

export const Title: FC<TitleProps> = ({
    className,
    children,
    center,
    size = 'm',
    OutTag = 'h2',
    theme = TitleTheme.DEFAULT,
}) => {
    return (
        <OutTag
            className={classNames(className, styles.Title, styles[theme], styles[size], {
                [styles.center]: center,
            })}
        >
            {children}
        </OutTag>
    );
};
