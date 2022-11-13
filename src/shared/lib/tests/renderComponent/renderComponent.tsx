import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTesting';

export interface ComponentRenderOptions {
    route?: string;
}

export const renderComponent = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
