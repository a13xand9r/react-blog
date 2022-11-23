import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue test', () => {
    test('should return state', () => {
        const state: Partial<StateSchema> = {
            counter: {
                value: 5,
            },
        };

        expect(getCounterValue(state as StateSchema)).toBe(5);
    });
});
