import { FC, HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Overlay.module.scss';

export const Overlay: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
    return <div {...otherProps} className={classNames(className, styles.Overlay)}></div>;
};
