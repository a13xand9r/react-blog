import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '../types/pageSchema';

const initialState: PageSchema = {
    scrollPosition: {},
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ pathname: string; position: number }>
        ) => {
            const { pathname, position } = action.payload;
            state.scrollPosition[pathname] = position;
        },
    },
});

export const { actions: pageActions } = pageSlice;
export const { reducer: pageReducer } = pageSlice;
