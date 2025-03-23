<template>
    <DesktopController v-if="!isMobile" class="bg-red-100">
        <slot/>
    </DesktopController>
    <div v-else class="bg-red-500">
        <slot/>
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';
import DesktopController from './DesktopController.vue';
</script>