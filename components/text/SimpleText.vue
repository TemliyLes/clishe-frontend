<template>
    <p class="monster mb-2 text-main" :style="fontSize(fSize[0], fSize[1])">
        <slot />
    </p>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';

const props = defineProps({
    size: {
        type: Array,
        default: () => [16, 24]
    },
    big: {
        type: Boolean,
        default: false
    }
})

const fSize = computed(() => props.big ? [18, 32] : props.size)
</script>