import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { useTranslation } from 'react-i18next';

interface RequireAuthProps {
    requiredRoles?: UserRole[];
    children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = ({ requiredRoles, children }) => {
    const isAuth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();
    const { t } = useTranslation();

    const hasPermission = useMemo(() => {
        if (!requiredRoles) {
            return true;
        }
        return requiredRoles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [requiredRoles, userRoles]);

    if (!isAuth) {
        return <Navigate to={routesPaths.main} state={{ from: location }} replace />;
    }
    if (!hasPermission) {
        return <Page>{t('No permission')}</Page>;
    }
    return <>{children}</>;
};
