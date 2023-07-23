import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Title } from 'shared/ui/Title/Title';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { useGetNotificationsQuery } from '../../api/notificationsApi';

import styles from './Notifications.module.scss';

interface NotificationsProps {
    className?: string;
}

export const Notifications: FC<NotificationsProps> = memo(({ className }) => {
    const {
        isError,
        isLoading,
        data: notifications,
    } = useGetNotificationsQuery(null, {
        pollingInterval: 10000,
    });
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="8" className={classNames(className, styles.Notifications)}>
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack gap="8" className={classNames(className, styles.Notifications)}>
            {isError && <Text theme={TextTheme.ERROR}>{t('Error occured')}</Text>}
            {notifications?.map((notification) => (
                <Card key={notification.id} className={styles.card}>
                    <Title size="s">{notification.title}</Title>
                    <Text>{notification.description}</Text>
                </Card>
            ))}
        </VStack>
    );
});
