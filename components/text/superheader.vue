<template>
    <h1 class="leading-none text-main my-h1 sm:mt-superheader" :style="fontSize(size[0], size[1])">
        <slot />
    </h1>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';
defineProps({
    size: {
        type: Array,
        default: [40, 72]
    }
})
</script>