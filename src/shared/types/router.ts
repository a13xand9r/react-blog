import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line fsd-imports-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    requiredRoles?: UserRole[];
};
