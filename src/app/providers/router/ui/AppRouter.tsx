import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    return (
        <div className='content-wrapper'>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routesConfig).map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};
