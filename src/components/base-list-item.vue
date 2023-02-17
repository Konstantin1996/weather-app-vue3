<template>
    <!-- Need to pass this login into block -->
    <li 
        :class="$style.item"
        @click="onClickRedirectUserToLdp"
    >
        <strong :class="$style.city">City</strong> 
        <span>{{ item.name }}</span>
        <strong :class="$style.country">Country</strong>
        <span>{{ item.country }}</span>
    </li>
</template>

<script setup lang="ts">
    import { PropType, inject } from 'vue';
    import { Item } from '@/interfaces/Item';
    import { useRouter } from "vue-router";

    const props = defineProps({
        item: {
            type: Object as PropType<Item>,
            default: null,
            required: true
        }
    });

    const store = inject("store");
    const router = useRouter();

    function onClickRedirectUserToLdp() {
        router.push(`/location/${props.item.id}`);
        store.setItem(props.item);
    }
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
