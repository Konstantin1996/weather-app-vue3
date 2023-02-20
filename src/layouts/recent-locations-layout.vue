<template>
    <h2 :class="$style.title"><slot name="title" /></h2>
    <p :class="$style.hint">
        <slot name="hint" />
    </p>
    <div :class="$style.content">
        <slot name="content" />
    </div>
</template>
<style lang="less" module>
    .title, .content, .hint {
        text-align: center;
    }

    .title {
        margin-bottom: 0;
    }

    .hint {
        margin-top: 5px;
        font-style: italic;
        color: rgb(44, 42, 42);
    }
</style>