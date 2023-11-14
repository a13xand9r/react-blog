import { useMemo } from 'react';
import {
    CreateSliceOptions,
    SliceCaseReducers,
    bindActionCreators,
    createSlice,
} from '@reduxjs/toolkit';

import { useAppDispatch } from '../lib/hooks/useAppDispatch';

export const buildSlice = <
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(
    options: CreateSliceOptions<State, CaseReducers, Name>
) => {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch();

        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
};
