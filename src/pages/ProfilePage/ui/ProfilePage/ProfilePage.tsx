import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { Title } from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from '../EditableProfileCard/EditableProfileCard';

const ProfilePage: FC = memo(() => {
    const { t } = useTranslation('profilePage');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Title>{t('User not found')}</Title>;
    }

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
