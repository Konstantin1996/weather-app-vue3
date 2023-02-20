import { reactive, readonly } from "vue";
import { Item } from "@/interfaces/Item";
import { Store } from "@/interfaces/Store";

const state = reactive({
    selectedItem: null as Item | null,
});

const setItem = (item: Item | null) => {
    state.selectedItem = item;
};

const store: Store = {
    state: readonly(state),
};

export default store;
