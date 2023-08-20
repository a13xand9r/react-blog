import { fireEvent, screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';

import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
    test('render Sidebar', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });

    test('collapse Sidebar', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
        const toggleButton = screen.getByTestId('Sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('Sidebar')).not.toHaveClass('collapsed');
    });
});
