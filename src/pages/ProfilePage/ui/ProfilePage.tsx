import { fetchProfileData, ProfileCard, ProfileHeader, profileReducer } from 'entities/Profile';
import { FC, memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';

const ProfilePage: FC = memo(() => {
    useDynamicReducerLoader('profile', profileReducer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div>
            <ProfileHeader />
            <ProfileCard />
        </div>
    );
});

export default ProfilePage;
