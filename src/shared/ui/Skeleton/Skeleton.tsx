import { CSSProperties, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    maxWidth?: number | string;
    width?: number | string;
    height?: number | string;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className, border, height, width, maxWidth }) => {
    const inlineStyles: CSSProperties = {
        maxWidth,
        width,
        height,
        borderRadius: border,
    };
    return <div style={inlineStyles} className={classNames(className, styles.Skeleton)}></div>;
};
