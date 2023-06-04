import { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'widgets/Loader';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';

import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routesConfig).map(({ path, element, authOnly }) => (
                    <Route
                        key={path}
                        path={path}
                        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
