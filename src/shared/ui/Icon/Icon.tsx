import { FC, SVGAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Icon.module.scss';

interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
    isInvertedColor?: boolean;
}

export const Icon: FC<IconProps> = ({ SvgIcon, className, isInvertedColor, ...otherProps }) => {
    return (
        <SvgIcon
            {...otherProps}
            className={classNames(className, styles.Icon, { [styles.inverted]: isInvertedColor })}
        />
    );
};
