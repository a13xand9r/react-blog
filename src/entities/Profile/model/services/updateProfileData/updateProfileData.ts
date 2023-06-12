import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { validateProfileForm } from '../../validateForm/validateForm';
import { getProfileForm } from '../../selectors/getProfileForm';
import { Profile, ValidateError } from '../../types/profileSchema';
import { profileActions } from '../../slice/profileSlice';

export const updateProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<ValidateError[]>
>('profile/updateProfileDate', async (id, { dispatch, rejectWithValue, extra, getState }) => {
    const formData = getProfileForm(getState());

    const errors = validateProfileForm(formData);
    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        if (!id) {
            throw new Error();
        }

        const response = await extra.api.put<Profile>(`/profile/${id}`, formData);

        dispatch(profileActions.toggleEditMode(true));

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(['SERVER_ERROR']);
    }
});
