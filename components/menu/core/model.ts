import type {ID} from "assets/ts/model";

export interface OwnCardModel {
    id?: ID;
    number?: number;
    step?: string;
    title?: string;
    content?: ContentModel[];
}

export interface ContentModel {
    id?: ID;
    name?: string;
    imageSrc?: string;
}