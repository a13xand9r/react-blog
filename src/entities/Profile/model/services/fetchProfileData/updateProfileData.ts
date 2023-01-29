import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { getProfileForm } from './../../selectors/getProfileForm';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types/profileSchema';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileDate',
    async (_, { dispatch, rejectWithValue, extra, getState }) => {
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.post<Profile>('/profile', formData);

            dispatch(profileActions.toggleEditMode(true));

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);