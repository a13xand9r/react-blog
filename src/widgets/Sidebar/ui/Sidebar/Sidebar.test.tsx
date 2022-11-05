import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';


describe('Sidebar test', () => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });

    // test('collapse Sidebar', () => {
    //     renderWithTranslation(<Sidebar />);
    //     const toggleButton = screen.getByTestId('Sidebar-toggle');
    //     fireEvent.click(toggleButton);
    //     expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    // });
});
