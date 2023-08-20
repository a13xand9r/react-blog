import { FC, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownPosition } from '@/shared/types/ui';

import popupStyles from '../../styles/popup.module.scss';
import { positionMapper } from '../../styles/consts';

import styles from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    children: ReactNode;
    triggerBtnContent: ReactNode;
    position?: DropdownPosition;
}

export const Popover: FC<PopoverProps> = ({
    children,
    className,
    triggerBtnContent,
    position = 'bottom right',
}) => {
    const positionClassName = positionMapper[position];

    return (
        <HPopover className={classNames(className, popupStyles.popup)}>
            <HPopover.Button className={popupStyles.triggerBtn}>
                {triggerBtnContent}
            </HPopover.Button>

            <HPopover.Panel className={classNames(styles.panel, positionClassName)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
