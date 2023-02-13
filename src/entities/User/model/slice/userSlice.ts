import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
    _isInit: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authUser = action.payload;
        },
        initAuthData: state => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authUser = JSON.parse(user);
            }
            state._isInit = true;
        },
        logout: state => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authUser = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
