import { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import UserIcon from '@/shared/assets/icons/userIcon.svg';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Icon } from '@/shared/ui/Icon';

import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    isInvertedFallback?: boolean;
}

export const Avatar: FC<AvatarProps> = ({
    src,
    size = 100,
    alt,
    className,
    isInvertedFallback,
}) => {
    const inlineStyles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size]
    );
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon SvgIcon={UserIcon} isInvertedColor={isInvertedFallback} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={inlineStyles}
            alt={alt}
            className={classNames(className, styles.Avatar)}
        />
    );
};
