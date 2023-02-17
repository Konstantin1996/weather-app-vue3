<template>
    <base-input-with-list 
        :inputValue="searchedValue"
        :items="suggestions"
        @input="debouncedOnInputGiveSuggestions"
    />
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import axios from 'axios';
    import { debounce } from '@/helpers/index';
    import { AUTO_COMPLETE_SUGGESTIONS_URL } from '@/helpers/constants';
    import BaseInputWithList from "@/components/base-input-with-list.vue";

    const suggestions = ref([]);
    const searchedValue = ref('');

    async function onInputGiveAutoSuggestions(searchedExp: string): Promise<void> {
        searchedValue.value = searchedExp;
        
        const params = { params: { key: import.meta.env.VITE_WEATHER_API_KEY , q: searchedExp } };
        const { data } = await axios.get(AUTO_COMPLETE_SUGGESTIONS_URL, params);
        suggestions.value = data;

        return Promise.resolve();
    }

    const debouncedOnInputGiveSuggestions = debounce(onInputGiveAutoSuggestions);
</script>
