<template>
    <input
        :class="$style.input"
        type="text"
        :value="value"
        @input="onInputEmitEvent"
    />
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    defineProps({
        value: {
            type: String,
            default: '',
            required: true
        }
    });

    const emit = defineEmits<{(e: 'input', value: string): void}>();

    const onInputEmitEvent = (event: Event | null) => {
        const target = event?.target as HTMLInputElement;

        emit('input', target.value)
    }
</script>

<style module>
    .input {
        width: 100%;
        box-sizing: border-box;
    }
</style>
