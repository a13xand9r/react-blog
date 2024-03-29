import { memo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from '@/shared/ui/Loader';

import { routesConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routesConfig).map(({ path, element, authOnly, requiredRoles }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            authOnly ? (
                                <RequireAuth requiredRoles={requiredRoles}>{element}</RequireAuth>
                            ) : (
                                element
                            )
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
