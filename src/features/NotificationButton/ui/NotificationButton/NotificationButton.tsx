import { FC, memo, useCallback, useState } from 'react';

import { Popover } from '@/shared/ui/Popups';
import { Notifications } from '@/entities/Notifications';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import { detectDevice } from '@/shared/lib/detectDevice/detectDevice';
import { Drawer } from '@/shared/ui/Drawer';

import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({ className }) => {
    const isMobile = detectDevice();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon isInvertedColor SvgIcon={NotificationIcon} />
        </Button>
    );
    return isMobile ? (
        <>
            {trigger}
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <Notifications />
            </Drawer>
        </>
    ) : (
        <Popover position="bottom left" triggerBtnContent={trigger}>
            <Notifications className={styles.notifications} />
        </Popover>
    );
});
