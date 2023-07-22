import type { position } from "@customTypes/type";
import { writable } from "svelte/store";

export const visibility = writable<boolean>(false);
export const browserMode = writable<boolean>(false);
export const resName = writable<string>("");

interface IFurniture {
    label: string;
    object: string;
    price: number;
    type?: string;
    max?: number;
}

interface IOwnedFurniture extends IFurniture {
    id: string;
}

interface IFurnitures {
    category: string
    items: IFurniture[];
}




export const FURNITURES = writable<IFurnitures[]>(null);

export const SHOWFURNITURES = writable<IFurnitures>(null);

export const CURRENTFURNITURE = writable<IFurniture>(null);

export const IS_MENU_MINIMIZED = writable<boolean>(false);

export const IS_CART_OPEN = writable<boolean>(false);

export const IS_OWNEDITEMS_OPEN = writable<boolean>(false);

export const OWNEDITEMS = writable<IFurniture[]>([]);

interface ICartItem extends IFurniture {
    entity: number;
    position: position
    rotation: position
}

export const CART = writable<ICartItem[]>([]);
