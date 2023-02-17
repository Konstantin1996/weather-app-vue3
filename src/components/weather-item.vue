<template>
    <p>Name: {{ name }}</p>
    <p>Region: {{ region }}</p>
    <p>Country: {{ country }}</p>
    <p>Temperature: {{ tempInCelsius }} °C</p>
    <p>Condition: {{ weatherCondition }}</p>
    <img :src="weatherIcon" alt="weather-img">
</template>

<script setup lang="ts">
    import { defineProps, PropType } from 'vue';

    defineProps({
        name: {
            type: Object as PropType<string | undefined>,
            required: true,
        },

        region: {
            type: Object as PropType<string | undefined>,
            required: true,
        },

        country: {
            type: Object as PropType<string | undefined>,
            required: true,
        },

        tempInCelsius: {
            type: Object as PropType<number | undefined>,
            required: true
        },

        weatherCondition: {
            type: Object as PropType<string | undefined>,
            default: '',
            required: true
        },

        weatherIcon: {
            type: String,
            default: '',
        }
    })
</script>