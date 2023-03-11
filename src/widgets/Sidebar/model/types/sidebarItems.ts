export interface SidebarItemType {
    url: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
