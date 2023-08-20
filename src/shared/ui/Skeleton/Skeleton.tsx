import { CSSProperties, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className, border, height, width }) => {
    const inlineStyles: CSSProperties = {
        maxWidth: width,
        height,
        borderRadius: border,
    };
    return <div style={inlineStyles} className={classNames(className, styles.Skeleton)}></div>;
};
