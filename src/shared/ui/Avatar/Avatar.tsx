import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, size = 100, alt, className }) => {
    const inlineStyles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return <img src={src} style={inlineStyles} alt={alt} className={classNames(className, styles.Avatar)} />;
};
