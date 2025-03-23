<template>
  <DesktopOrMobile>
    <NuxtPage/>
  </DesktopOrMobile>
</template>
<script setup>
import '~/assets/css/main.css'

import DesktopOrMobile from '~/components/layout/DesktopOrMobile.vue'

import { init, screenWidth, isMobile } from './helpers/break';

import Header from './components/text/header.vue';

onMounted(()=>{
  init();
})
</script>