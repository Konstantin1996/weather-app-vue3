<template>
    <base-list-item
        :key="item.id"
        :item="item"
        @click="onClickRedirectUserToLdp"
    />
</template>

<script setup lang="ts">
    import { PropType, inject } from 'vue';
    import { Item } from '@/interfaces/Item';
    import { Store } from '@/interfaces/Store';
    import { useRouter } from "vue-router";
    import BaseListItem from '@/components/base-list-item.vue';

    const props = defineProps({
        item: {
            type: Object as PropType<Item>,
            default: null,
            required: true
        }
    });

    const store: Store | undefined = inject("store");
    const router = useRouter();

    function onClickRedirectUserToLdp(item: Item) {
        router.push(`/location/${item.id}`);
        // need to move this logic into page
        store.setItem(props.item);
    }
</script>