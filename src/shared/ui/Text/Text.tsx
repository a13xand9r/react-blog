import { FC, HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export const enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error',
}

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
    className,
    children,
    theme = TextTheme.DEFAULT,
    ...otherProps
}) => {
    return (
        <div {...otherProps} className={classNames(className, styles.Text, styles[theme])}>
            <p className={styles.text}>{children}</p>
        </div>
    );
};
