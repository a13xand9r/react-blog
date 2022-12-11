import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export const enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export type ButtonSize = 'S' | 'M' | 'L' | 'XL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
};

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    size = 'M',
    square = false,
    ...props
}) => {
    return (
        <button
            className={classNames(
                styles.Button,
                styles[theme],
                styles[size],
                { [styles.square]: square },
                { [styles.disabled]: props.disabled },
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
