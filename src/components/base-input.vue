<template>
    <input
        :class="$style.input"
        type="text"
        :value="value"
        @input="e => $emit('input', e.target.value)"
    />
</template>

<script setup lang="ts">
    defineProps({
        value: {
            type: String,
            default: '',
            required: true
        }
    });

    defineEmits<{(e: 'input', value: string): void}>();
</script>

<style module>
    .input {
        width: 100%;
        box-sizing: border-box;
    }
</style>
