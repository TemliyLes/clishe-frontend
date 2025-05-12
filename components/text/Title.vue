<template>
    <h4 class="monster text-[14px] md:text-16px uppercase text-grey my-4 sm:my-6 lg:my-10">
        <slot />
    </h4>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';
</script>