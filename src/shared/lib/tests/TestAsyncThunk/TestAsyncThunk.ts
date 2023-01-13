import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
    dispatch: Dispatch;
    getState: () => StateSchema;
    asyncThunk: AsyncThunk<Returned, ThunkArg, { rejectValue: RejectValue }>;

    constructor (asyncThunk: AsyncThunk<Returned, ThunkArg, { rejectValue: RejectValue }>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.asyncThunk = asyncThunk;
    }

    async callThunk (arg: ThunkArg) {
        const action = this.asyncThunk(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
};
