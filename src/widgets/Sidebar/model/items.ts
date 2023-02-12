import { routesPaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    url: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const sidebarItems: SidebarItemType[] = [
    {
        url: routesPaths.main,
        title: 'Main',
        Icon: HomeIcon,
    },
    {
        url: routesPaths.about,
        title: 'About',
        Icon: AboutIcon,
    },
    {
        url: routesPaths.profile,
        title: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
