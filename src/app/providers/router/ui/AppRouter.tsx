import { memo, Suspense, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'widgets/Loader';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
    const isUserAuth = useSelector(getUserAuthData);
    const routes = useMemo(
        () =>
            Object.values(routesConfig).filter(
                route => !route.authOnly || isUserAuth
            ),
        [isUserAuth]
    );
    return (
        <div className="content-wrapper">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
});
