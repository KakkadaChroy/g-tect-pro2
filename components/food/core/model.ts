import type {ID} from "assets/ts/model";

export interface FoodModel {
    id?: ID;
    image?: string;
    title?: string;
    description?: string;
    price?: number;
    orders?: Order;
}

interface Order {
    type?: string;
    bases?: string;
    quantity?: number;
    price?: number;
}