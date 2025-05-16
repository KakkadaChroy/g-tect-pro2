export type ID = number | string | null | undefined;


export interface NavItemsModel {
    id?: ID;
    name?: string;
    path?: string;
}

export interface SocialLinkModel {
    id?: ID;
    iconImage?: string;
    color?: string;
}