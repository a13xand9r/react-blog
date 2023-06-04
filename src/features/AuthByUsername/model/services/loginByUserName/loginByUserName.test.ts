import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUserName';

describe('loginByUserName thunk', () => {
    // test('success login', async () => {
    //     const userData = { id: '1', username: 'user1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    //     const asyncThunkAction = loginByUsername({ username: 'user', password: 'pass' });
    //     const result = await asyncThunkAction(dispatch, getState, undefined);

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userData);
    // });

    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const asyncThunkAction = loginByUsername({ username: 'user', password: 'pass' });
    //     const result = await asyncThunkAction(dispatch, getState, undefined);

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });

    test('success login', async () => {
        const userData = { id: '1', username: 'user1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

        const result = await thunk.callThunk({
            username: 'user',
            password: 'pass',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({
            username: 'user',
            password: 'pass',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
