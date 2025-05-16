import type {ID} from "assets/ts/model";

export interface PokeBarLocation {
    id?: ID;
    address?: string;
    phone?: string;
    email?: string;
    image?: string;
    hours?: string;
    deliveryAvailable?: boolean;
    pickupAvailable?: boolean;
    km?: string;
}

export interface DrinkModel {
    id?: ID;
    name?: string;
    price?: number;
    image?: string;
}