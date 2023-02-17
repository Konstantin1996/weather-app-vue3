<template>
    <base-btn @click="onClickSaveToFavoriteList">Save to Favorite List</base-btn>
</template>

<script setup lang="ts">
    import { onMounted, PropType } from 'vue';
    import BaseBtn from '@/components/base-btn.vue'
    import { FavoriteItem } from '@/interfaces/FavoriteItem';

    const props = defineProps({
        objectToSave: {
            type: Object as PropType<FavoriteItem>,
            required: true
        }
    });

    onMounted(() => {
        console.log('objectToSave', props.objectToSave);
    })

    function onClickSaveToFavoriteList() {
        // if (localStorage.getItem('favoriteList') === null) {
        //     console.log('>>>>>> localStorage.getItem', localStorage.getItem('favoriteList'));
        //     localStorage.setItem('favoriteList', [JSON.stringify(props.objectToSave)]);
        //     return;
        // } 
        
        // const favoriteList = localStorage.getItem('favoriteList');
        // console.log('favoriteList >>>', favoriteList);
        // favoriteList.push(props.objectToSave);

        // favoriteList.forEach(el => console.log(el.cloud))

        // return localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }
</script>