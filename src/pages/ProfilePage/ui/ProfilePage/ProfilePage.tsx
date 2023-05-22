import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';

const ProfilePage: FC = memo(() => {
    useDynamicReducerLoader('profile', profileReducer);

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id && __PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <Page>
            <VStack gap="12" align="start" fullWidth>
                <ProfileHeader />
                <ProfileCard />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
