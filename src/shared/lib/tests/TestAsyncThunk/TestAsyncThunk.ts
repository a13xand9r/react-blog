import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
    dispatch: Dispatch;
    getState: () => StateSchema;
    asyncThunk: AsyncThunk<Returned, ThunkArg, { rejectValue: RejectValue }>;
    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(
        asyncThunk: AsyncThunk<Returned, ThunkArg, { rejectValue: RejectValue }>,
        state?: DeepPartial<StateSchema>
    ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.asyncThunk = asyncThunk;
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: ThunkArg) {
        const action = this.asyncThunk(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
