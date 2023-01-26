import { ThunkConfig } from './../../../../../app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

interface AuthData {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, AuthData, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { dispatch, rejectWithValue, extra }) => {
        try {
            const response = await extra.api.post<User>('/login', authData);

            console.log('response', response);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
