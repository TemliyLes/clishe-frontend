<template>
    <h4 :style="fontSize(14, 24)" class="monster uppercase text-grey my-4 sm:my-6 lg:my-10">
        <slot />
    </h4>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';
</script>