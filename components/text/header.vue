<template>
    <h2 class="monster text-main -ml-0.5" :style="fontSize(24, 42)">
        <slot />
    </h2>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';
</script>