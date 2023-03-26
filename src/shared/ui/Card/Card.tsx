import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children, className, ...otherProps }) => {
    return (
        <div className={classNames(className, styles.Card)} {...otherProps}>
            {children}
        </div>
    );
};
