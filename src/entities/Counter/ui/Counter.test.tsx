import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

const initialState = {
    counter: { value: 5 },
};

describe('Counter test', () => {
    test('render Counter', () => {
        renderComponent(<Counter />, { initialState });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
    });
    test('increment', () => {
        renderComponent(<Counter />, { initialState });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
    });
    test('decrement', () => {
        renderComponent(<Counter />, { initialState });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
    });
});
