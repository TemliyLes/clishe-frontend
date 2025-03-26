<template>
    <div class="w-full" :class="!full ? 'px-container sm:px-container-d' : ''">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    scroll: {
        type: Boolean,
        default: false,
    },
    full: {
        type: Boolean,
        default: false,
    }
});

</script>