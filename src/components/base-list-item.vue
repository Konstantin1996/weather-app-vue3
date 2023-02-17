<template>
    <li 
        :class="$style.item"
        @click="$emit('click', item)"
    >
        <strong :class="$style.city">City</strong> 
        <span>{{ item.name }}</span>
        <strong :class="$style.country">Country</strong>
        <span>{{ item.country }}</span>
    </li>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import { Item } from '@/interfaces/Item';

    defineProps({
        item: {
            type: Object as PropType<Item>,
            default: null,
            required: true
        }
    });

    defineEmits<{(e: 'click', value: Item): void}>();
</script>

<style module lang="less">
    .item {
        cursor: default;
        border-bottom: 1px solid grey;
        padding: 5px;

        &:hover {
            background: silver;
        }
    }

    .city {
        padding-right: 5px;
    }

    .country {
        padding: 0 5px;
    }
</style>
