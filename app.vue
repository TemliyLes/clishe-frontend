<template>
  <DesktopOrMobile>
    <!-- <Preloader /> -->
    <TopBar />
    <NuxtPage />
  </DesktopOrMobile>
</template>
<script setup>
import '~/assets/css/main.css'

import DesktopOrMobile from '~/components/layout/DesktopOrMobile.vue'
import TopBar from './components/topmenu/TopBar.vue';
import Preloader from './components/other/Preloader.vue';

import { init } from './helpers/break';

onMounted(() => {
  init();
})
</script>