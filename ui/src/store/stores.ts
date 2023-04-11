import { writable } from "svelte/store";

export const visibility = writable<boolean>(false);
export const browserMode = writable<boolean>(false);
export const resName = writable<string>("");

interface IFurniture {
    label: string;
    object: string;
    price: number;
}

interface IFurnitures {
    [key: string]: IFurniture[];
}




export const FURNITURES = writable<IFurnitures>(null);

export const SHOWFURNITURES = writable<IFurniture[]>(null);