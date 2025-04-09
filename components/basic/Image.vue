<template>
    <img class="w-full h-full" :src="src" :alt="alt">
</template>
<script setup>
defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: 'alt'
    }
});
</script>