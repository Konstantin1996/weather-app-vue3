<template>
    <location-details-layout>
        <template #item>
            <weather-item
                :name="name"
                :region="region"
                :country="country"
                :tempInCelsius="tempInCelsius"
                :weatherIcon="weatherIcon"
                :weatherCondition="weatherCondition"
            />
        </template>

        <template #action>
            <save-to-favorite-btn-block />
        </template>
    </location-details-layout> 
</template>

<script setup lang="ts">
    import { onMounted, computed, reactive, inject } from "vue";
    import axios from 'axios';
    import { FORECAST_WEATHER_URL } from '@/helpers/constants';
    import LocationDetailsLayout from '@/layouts/location-details-layout.vue';
    import { FavoriteItem, Store } from '@/interfaces/FavoriteItem';
    import WeatherItem from '@/components/weather-item.vue';
    import SaveToFavoriteBtnBlock from '@/blocks/save-to-favorite-btn-block.vue';

    type Forecast = {
        temp_c?: number,
        condition?: {
            icon?: string,
            text?: string
        },
    }

    const currentForecast: Forecast = reactive({});
    // let notReactiveObjectToSave: FavoriteItem;

    onMounted(async () => {
        const params = { params: { key: import.meta.env.VITE_WEATHER_API_KEY , q: name.value } };
        const { data: { current } } = await axios.get(FORECAST_WEATHER_URL, params);
        console.log('current', current);
        Object.assign(currentForecast, current);
        // notReactiveObjectToSave = Object.assign({}, currentForecast, current);
    });

    const store: Store = inject("store");

    const name = computed<string>(() => {
        return store.state.selectedItem.name;
    });

    const region = computed<string>(() => {
        return store.state.selectedItem.region;
    })

    const country = computed<string>(() => {
        return store.state.selectedItem.country;
    })

    const tempInCelsius = computed(() => {
        return currentForecast.temp_c;
    });

    const weatherIcon = computed(() => {
        return currentForecast.condition?.icon;
    })

    const weatherCondition = computed(() => {
        return currentForecast.condition?.text;
    })

    // const objectToSave = computed<FavoriteItem>(() => ({
    //     tempInCelsius,
    //     weatherIcon,
    //     weatherCondition,
    //     name,
    //     region,
    //     country
    // }));

    // const objectToSaveCopy = toRaw(objectToSave);
</script>

