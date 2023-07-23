import { FC, memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Notifications } from 'entities/Notifications';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';

import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({ className }) => {
    return (
        <Popover
            position="bottom left"
            triggerBtnContent={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon isInvertedColor SvgIcon={NotificationIcon} />
                </Button>
            }
        >
            <Notifications className={styles.notifications} />
        </Popover>
    );
});
