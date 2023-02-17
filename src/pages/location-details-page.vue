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
            <!-- :objectToSave="objectToSave" -->
            <save-to-favorite-btn-block  />
        </template>
    </location-details-layout> 
</template>

<script setup lang="ts">
    import { onMounted, computed, reactive, inject, ComputedRef } from "vue";
    import axios from 'axios';
    import { FORECAST_WEATHER_URL } from '@/helpers/constants';
    import LocationDetailsLayout from '@/layouts/location-details-layout.vue';
    import { FavoriteItem } from '@/interfaces/FavoriteItem';
    import { Store } from '@/interfaces/Store';
    import WeatherItem from '@/components/weather-item.vue';
    import SaveToFavoriteBtnBlock from '@/blocks/save-to-favorite-btn-block.vue';

    type Forecast = {
        temp_c?: number | undefined,
        condition?: {
            icon?: string,
            text?: string
        },
    }

    const currentForecast: Forecast = reactive({});
    // let notReactiveObjectToSave: FavoriteItem;

    onMounted(async () => {
        console.log('name.value', name.value);
        const params = { params: { key: import.meta.env.VITE_WEATHER_API_KEY , q: name.value } };
        const { data: { current } } = await axios.get(FORECAST_WEATHER_URL, params);
        console.log('current', current);
        Object.assign(currentForecast, current);
        // notReactiveObjectToSave = Object.assign({}, currentForecast, current);
    });

    const store: Store | undefined | null = inject("store");

    const name = computed<string | undefined>(() => {
        return store?.state?.selectedItem?.name;
    });

    const region = computed<string | undefined>(() => {
        return store?.state?.selectedItem?.region;
    })

    const country = computed<string | undefined>(() => {
        return store?.state?.selectedItem?.country;
    })
    
    const tempInCelsius = computed<number | undefined>(() => {
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

