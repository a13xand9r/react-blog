import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { ReducersList, StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18nForTesting';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

export const renderComponent = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
            >
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};
