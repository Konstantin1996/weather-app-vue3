import { reactive, readonly } from "vue";
import { Item } from "@/interfaces/Item";

const state = reactive({
    selectedItem: null,
});

const setItem = (item: Item) => {
    state.selectedItem = item;
};

export default {
    state: readonly(state),
    setItem,
};
