<template>
    <base-input-with-list-layout>
        <template #input>
            <base-input
                placeholder="Please, enter city country name" 
                v-bind="$attrs"
                :value="inputValue"
                @input="(value: string)  => $emit('input', value)"
            />
        </template>
        <template v-if="items.length" #item>
            <drop-down-list-item-block 
                v-for="item in items"
                :key="item.id"
                :item="item"
            />
        </template>
    </base-input-with-list-layout>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import BaseInputWithListLayout from '@/layouts/base-input-with-list-layout.vue';
    import BaseInput from '@/components/base-input.vue';
    import DropDownListItemBlock from '@/blocks/drop-down-list-item-block.vue';
    import { Item } from '@/interfaces/Item';

    defineProps({
        inputValue: {
            type: String,
            default: '',
            required: true
        },

        items: {
            type: Array as PropType<Array<Item>>,
            default: () => [],
            required: true
        }
    });

    defineEmits<{
        (event: 'input', value: string): void
    }>();
</script>