import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export const enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme
};

export const Button: FC<ButtonProps> = ({ className, children, theme = ButtonTheme.CLEAR, ...props }) => {
    return (
        <button className={classNames(styles.Button, styles[theme], className)} {...props}>
            {children}
        </button>
    );
};
