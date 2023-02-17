<template>
    <base-list-item
        :key="item.id"
        :item="item"
        @click="onClickRedirectUserToLdp"
    />
</template>

<script setup lang="ts">
    import { PropType, inject } from 'vue';
    import { Item, Store } from '@/interfaces/Item';
    import { useRouter } from "vue-router";
    import BaseListItem from '@/components/base-list-item.vue';

    const props = defineProps({
        item: {
            type: Object as PropType<Item>,
            default: null,
            required: true
        }
    });

    const store: Store = inject("store");
    const router = useRouter();

    function onClickRedirectUserToLdp(item: Item) {
        router.push(`/location/${item.id}`);
        store.setItem(props.item);
    }
</script>