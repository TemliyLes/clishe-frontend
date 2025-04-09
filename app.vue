<template>
  <div>
    <PageOverlay />
    <Preloader />
    <TopBar :mb="mobileBlured" :mw="mobileWhite" :ms="mobileStyle" />
    <NuxtPage />
  </div>
</template>
<script setup>
import '~/assets/css/main.css'

import PageOverlay from '~/components/layout/PageOverlay.vue'
import TopBar from './components/topmenu/TopBar.vue';
import Preloader from './components/other/Preloader.vue';

import { init, isMobile } from './helpers/break';
import { mobileScreensList } from './helpers/scroll';

const app = useNuxtApp();

const mobileBlured = ref();
const mobileWhite = ref();
const mobileStyle = ref();

const scrollHandler = e => {
  requestAnimationFrame(() => {
    for (let index = 0; index < mobileScreensList.value.length; index++) {
      const elem = mobileScreensList.value[index];
      if (e.target.scrollTop <= elem.top) {
        mobileBlured.value = elem.element.getAttribute('blured');
        mobileWhite.value = elem.element.getAttribute('white');
        mobileStyle.value = elem.element.getAttribute('bg');
        break;
      }
    }
  });
}


onMounted(() => {
  init();

  if (isMobile.value) {
    requestAnimationFrame(() => {
      const scrollContainer = app.vueApp._container;
      scrollContainer.addEventListener('scroll', scrollHandler);
    })
  }

});


</script>