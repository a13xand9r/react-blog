import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

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
        <>
            <ProfileHeader />
            <ProfileCard />
        </>
    );
});

export default ProfilePage;
