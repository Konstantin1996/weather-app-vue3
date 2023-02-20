<template>
    <p v-if="name">Name: {{ name }}</p>
    <p v-if="region">Region: {{ region }}</p>
    <p v-if="country">Country: {{ country }}</p>
    <p v-if="tempInCelsius">Temperature: {{ tempInCelsius }} °C</p>
    <p v-if="weatherCondition">Condition: {{ weatherCondition }}</p>
    <img v-if="weatherIcon" :src="weatherIcon" alt="weather-img">
</template>

<script setup lang="ts">
    import { defineProps, PropType } from 'vue';
    import { LocationQueryValue } from 'vue-router';

    defineProps({
        name: {
            type: Object as PropType<LocationQueryValue | LocationQueryValue[]>,
            required: false,
        },

        region: {
            type: Object as PropType<LocationQueryValue | LocationQueryValue[]>,
            required: false,
        },

        country: {
            type: Object as PropType<LocationQueryValue | LocationQueryValue[]>,
            required: false,
        },

        tempInCelsius: {
            type: Object as PropType<number | undefined>,
            required: false
        },

        weatherCondition: {
            type: Object as PropType<string | undefined>,
            default: '',
            required: false
        },

        weatherIcon: {
            type: String,
            default: '',
        }
    })
</script>