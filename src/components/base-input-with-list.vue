<template>
    <base-input-with-list-layout>
        <template #input>
            <base-input
                placeholder="Please, enter city country name" 
                v-bind="$attrs"
                :value="inputValue"
                @input="value => $emit('input', value)"
            />
        </template>
        <template v-if="items.length" #item>
            <base-list-item
                slot:item
                v-for="item in items"
                :key="item.id"
                :item="item"
                @click="onClickEmitSelectedItem"
            />
        </template>
    </base-input-with-list-layout>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import BaseInputWithListLayout from '@/layouts/base-input-with-list-layout.vue';
    import BaseInput from '@/components/base-input.vue';
    import BaseListItem from '@/components/base-list-item.vue';
    import { Item } from '@/interfaces/Item';

    const props = defineProps({
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

    const emit = defineEmits<{
        (event: 'input', value: string): void
        (event: 'click', value: Item): void
    }>();

    function onClickEmitSelectedItem(selectedItem) {
        emit('click', selectedItem)
    }
</script>