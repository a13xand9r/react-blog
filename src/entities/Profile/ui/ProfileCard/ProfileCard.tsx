import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import { Title } from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading';
import { Loader } from 'widgets/Loader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
};

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profilePage');
    const data = useSelector(getProfileData);
    // const error = useSelector(getProfileData);
    const loading = useSelector(getProfileLoading);
    const [, setEditFirstname] = useState(data?.first);
    const [, setEditlastname] = useState(data?.lastname);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={classNames(className, styles.ProfileCard)}>
            <div className={styles.header}>
                <Title>{t('Profile')}</Title>
                <Button className={styles.editBtn} theme={ButtonTheme.OUTLINED}>{t('Edit')}</Button>
            </div>
            <Input className={styles.input} placeholder={t('Your name')} value={data?.first} onChange={setEditFirstname} />
            <Input className={styles.input} placeholder={t('Your lastname')} value={data?.lastname} onChange={setEditlastname} />
        </div>
    );
};
