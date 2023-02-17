<template>
    <section :class="$style.wrapper">
        <div :class="$style.item">
            <slot name="item"></slot>
        </div>
        <div :class="$style.action">
            <slot name="action"></slot>
        </div>
    </section>
</template>

<style lang="less" module>
    .wrapper {
        text-align: center;
    }

    .action {
        margin-top: 15px;
    }
</style>