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
    category: string
    items: IFurniture[];
}




export const FURNITURES = writable<IFurnitures[]>(null);

export const SHOWFURNITURES = writable<IFurnitures>(null);


interface ICurrentFurniture extends IFurniture {
    position: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
}

export const CURRENTFURNITURE = writable<ICurrentFurniture>(null);

export const IS_MENU_MINIMIZED = writable<boolean>(false);