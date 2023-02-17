<template>
    <p>Name: {{ name }}</p>
    <p>Region: {{ region }}</p>
    <p>Country: {{ country }}</p>
    <p>Temperature: {{ tempInCelsius }} °C</p>
    <p>Condition: {{ weatherCondition }}</p>
    <img :src="weatherIcon" alt="weather-img">
</template>

<script setup lang="ts">
    defineProps({
        name: {
            type: String,
            required: true,
        },

        region: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        tempInCelsius: {
            type: Number,
            required: true
        },

        weatherCondition: {
            type: String,
            default: '',
            required: true
        },

        weatherIcon: {
            type: String,
            default: '',
        }
    })
</script>