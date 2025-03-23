<template>
    <div v-if="isMobile" class="bg-red-100">
        <slot/>
    </div>
    <div v-else class="bg-red-500">
        <slot/>
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';
</script>