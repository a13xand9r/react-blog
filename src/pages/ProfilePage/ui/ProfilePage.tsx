import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';

interface ProfilePageProps {
    className?: string;
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profilePage');
    useDynamicReducerLoader('profile', profileReducer);
    return (
        <div className={className}>
            {t('Profile page')}
        </div>
    );
};

export default ProfilePage;
