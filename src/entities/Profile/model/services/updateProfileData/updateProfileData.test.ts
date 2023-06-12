import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { ProfileSchema } from '../../types/profileSchema';

import { updateProfileData } from './updateProfileData';

describe('updateProfileData thunk', () => {
    test('success update', async () => {
        const profile: DeepPartial<ProfileSchema> = {
            form: {
                first: 'alex',
                lastname: 'novikov',
                age: 26,
                username: 'admin',
                country: 'Russia',
            },
        };

        const thunk = new TestAsyncThunk(updateProfileData, { profile });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile.form }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profile.form);
    });

    test('validation error', async () => {
        const profile: DeepPartial<ProfileSchema> = {
            form: {
                first: '',
                lastname: 'novikov',
                username: 'admin',
                country: 'Russia',
            },
        };
        const thunk = new TestAsyncThunk(updateProfileData, { profile });

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(['NAME_ERROR', 'AGE_ERROR']);
    });
    test('server error', async () => {
        const profile: DeepPartial<ProfileSchema> = {
            form: {
                first: 'alex',
                lastname: 'novikov',
                age: 26,
                username: 'admin',
                country: 'Russia',
            },
        };

        const thunk = new TestAsyncThunk(updateProfileData, { profile });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(['SERVER_ERROR']);
    });
});
