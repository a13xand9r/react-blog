import { CounterSchema } from '../types/CounterSchema';

import { counterActions, counterReducer } from './counterSlice';

const state: CounterSchema = {
    value: 5,
};

describe('counterSlice test', () => {
    test('increment', () => {
        expect(counterReducer(state, counterActions.increment)).toEqual({
            value: 6,
        });
    });
    test('decrement', () => {
        expect(counterReducer(state, counterActions.decrement)).toEqual({
            value: 4,
        });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({
            value: 1,
        });
    });
});
