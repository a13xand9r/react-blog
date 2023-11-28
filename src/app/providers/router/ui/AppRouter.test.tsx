import { screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { routesPaths } from '@/shared/consts/router';

import { AppRouter } from './AppRouter';

describe('AppRouter', () => {
    test('About Page should be rendered', async () => {
        renderComponent(<AppRouter />, {
            route: routesPaths.getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Not Found Page should be rendered', async () => {
        renderComponent(<AppRouter />, {
            route: '/some-non-existent-page',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect non authorized user', async () => {
        renderComponent(<AppRouter />, {
            route: routesPaths.getRouteArticleDetails('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect forbidden page for authorized user', async () => {
        renderComponent(<AppRouter />, {
            route: routesPaths.getRouteAdmin(),
            initialState: {
                user: {
                    _isInit: true,
                    authUser: {},
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
});
