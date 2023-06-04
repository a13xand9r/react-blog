import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Card.module.scss';

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
