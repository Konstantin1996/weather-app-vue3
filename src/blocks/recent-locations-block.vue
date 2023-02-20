<template>
    <recent-locations-layout v-if="recentlyVisited.length">
        <template #title>Recently visited</template>
        <template #hint>Shows 5 recent locations</template>
        <template #content>
            <recent-item v-for="item of recentlyVisited" :item="item" :key="item.id" ></recent-item>
        </template>
    </recent-locations-layout>
</template>

<script setup lang="ts">
    import RecentItem from '@/components/recent-item.vue';
    import RecentLocationsLayout from '@/layouts/recent-locations-layout.vue';
    import { Item } from '@/interfaces/Item';
    import { onMounted, ref, computed } from 'vue';
    let recentlyVisited = ref<Array<Item>>([]);

    onMounted(() => {
        recentlyVisited.value = JSON.parse(sessionStorage.getItem('recentWeather') as string) || [];
        recentlyVisited.value = recentlyVisited.value.slice(-5).reverse();
        console.log('recentlyVisited', recentlyVisited);
    });
</script>