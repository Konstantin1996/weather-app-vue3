<template>
    <div :class="$style.wrapper">
        <div :class="$style.inputWrapper">
            <slot name="input" />
        </div>
        <ul 
            v-if="$slots.item" 
            :class="$style.listWrapper"
        >
            <slot name="item" />
        </ul>
    </div>
</template>

<style module lang="less">
    .wrapper {
        position: relative;
        margin: auto;
        width: 400px;
    }

    .listWrapper {
        background: white;
        box-sizing: border-box;
        position: absolute;
        width: inherit;
        border: 1px solid black;
        left: 0;
        list-style-type: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        :last-child {
            border: 0;
        }
    }
</style>