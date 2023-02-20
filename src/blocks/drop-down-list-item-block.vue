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

    async function onClickRedirectUserToLdp(item: Item) {
        let recentWeather: Array<Item> = JSON.parse(sessionStorage.getItem('recentWeather') as string) || [];
        const query = {
            name: item.name,
            region: item.region,
            country: item.country,
            lon: item.lon,
            lat: item.lat
        };

        if (!recentWeather.some((recentItem: Item) => recentItem.id === item.id)) {
            recentWeather.push(item);
        }

        sessionStorage.setItem('recentWeather', JSON.stringify(recentWeather));

        await router.push({ path: `/location/${item.id}`, query });
    }
</script>