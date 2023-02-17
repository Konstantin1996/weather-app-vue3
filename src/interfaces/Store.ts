import { Item } from "@/interfaces/Item";
export interface Store {
    state?: {
        selectedItem: Item | null;
    };
    setItem: Function;
}
