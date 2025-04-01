<template>
    <DesktopController v-if="!isMobile">
        <!-- <ScrollCapture /> -->
        <slot />
    </DesktopController>
    <div v-else>
        <slot />
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';
import DesktopController from './DesktopController.vue';
// import ScrollCapture from './ScrollCapture.vue';
</script>