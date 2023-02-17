import { reactive, readonly } from "vue";
import { Item } from "@/interfaces/Item";
import { Store } from "@/interfaces/Store";

const state = reactive({
    selectedItem: null,
});

const setItem = (item: Item) => {
    state.selectedItem = item;
};

const store: Store = {
    state: readonly(state),
    setItem,
};

export default store;
