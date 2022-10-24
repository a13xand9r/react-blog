import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.modules.scss'

interface NavbarProps {
    className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(className, styles.Navbar)}>

        </div>
    );
};
