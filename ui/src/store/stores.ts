import { writable } from "svelte/store";

export const visibility = writable<boolean>(false);
export const browserMode = writable<boolean>(false);
export const resName = writable<string>("");