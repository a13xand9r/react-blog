import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, memo, ReactNode } from 'react';
import { useTheme } from 'shared/theme/ThemeContext';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = memo(({ className, children, onClose, isOpen }) => {
    const { theme } = useTheme();

    return (
        <Portal>
            <div
                className={classNames(styles.Drawer, { [styles.opened]: isOpen }, className, theme)}
            >
                <Overlay onClick={onClose} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
});
