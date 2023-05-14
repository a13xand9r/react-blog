import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        toggleEditMode: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
            state.validateErrors = undefined;
        },
        cancelFormEdit: state => {
            state.form = state.data;
            state.readonly = true;
            state.validateErrors = undefined;
        },
        updateForm: (state, action: PayloadAction<Partial<Profile>>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })

            .addCase(updateProfileData.pending, state => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.validateErrors = undefined;
                state.isLoading = false;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateErrors = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
