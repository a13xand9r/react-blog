import { fireEvent, screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

import { counterReducer } from '../model/slice/counterSlice';

import { Counter } from './Counter';

const initialState = {
    counter: { value: 5 },
};
const reducer = {
    counter: counterReducer,
};

describe('Counter test', () => {
    test('render Counter', () => {
        renderComponent(<Counter />, { initialState, asyncReducers: reducer });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
    });
    test('increment', () => {
        renderComponent(<Counter />, { initialState, asyncReducers: reducer });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
    });
    test('decrement', () => {
        renderComponent(<Counter />, { initialState, asyncReducers: reducer });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
    });
});
