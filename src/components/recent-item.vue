<template>
    <router-link custom v-slot="{ navigate }" :to="path">
        <div :class="$style.item" @click="navigate">
            <p v-if="item.name && item.country">{{ item.name }}, {{ item.country }}</p>
        </div>
    </router-link>
</template>

<script setup lang="ts">
    import { defineProps, PropType, computed } from 'vue';
    import { Item } from '@/interfaces/Item';
    import WeatherItem from '@/components/weather-item.vue';

    const props = defineProps({
        item: {
            type: Object as PropType<Item>,
            default: null,
            required: true
        }
    });

    const path = computed<Object>(() => {
        return {
            name: 'LdpPage',
            params: {
                id: props.item.id,
            },
            query: {
                name: props.item.name,
                region: props.item.region,
                country: props.item.country,
                lon: props.item.lon,
                lat: props.item.lat
            }
        }
    });
</script>

<style lang="less" module>
    .item {
        margin: 0 auto;
        cursor: pointer;
    }
</style>