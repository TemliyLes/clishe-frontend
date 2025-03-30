<template>
    <DesktopController v-if="!isMobile">
        <slot />
    </DesktopController>
    <div v-else>
        <slot />
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';
import DesktopController from './DesktopController.vue';
</script>