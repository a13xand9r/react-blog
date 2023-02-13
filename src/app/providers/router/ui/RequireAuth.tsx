import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return (
            <Navigate
                to={routesPaths.main}
                state={{ from: location }}
                replace
            />
        );
    }
    return <>{children}</>;
};
