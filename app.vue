<template>
  <div>
    <PageOverlay />
    <Preloader />
    <TopBar />
    <NuxtPage />
  </div>
</template>
<script setup>
import '~/assets/css/main.css'

import PageOverlay from '~/components/layout/PageOverlay.vue'
import TopBar from './components/topmenu/TopBar.vue';
import Preloader from './components/other/Preloader.vue';

import { init } from './helpers/break';

onMounted(() => {
  init();
});


</script>