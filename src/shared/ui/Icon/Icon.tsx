import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

interface IconProps {
    SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

export const Icon: FC<IconProps> = ({ SvgIcon, className }) => {
    return <SvgIcon className={classNames(className, styles.Icon)} />;
};
