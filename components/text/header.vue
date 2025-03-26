<template>
    <h2 class="monster text-grey" :style="fontSize(14, 96)">
        <slot />
    </h2>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';
</script>