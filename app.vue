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
import { mobileScreensList, scrollY } from './helpers/scroll';

import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();
const { fetchCollections, fetchAboutBlock, fetchWithLove, fetchFAQ, fetchThemes, fetchMethodic } = store;

const route = useRoute();
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
        mobileStyle.value = elem.element.getAttribute('mbg');
        scrollY.value = e.target.scrollTop;
        break;
      }
    }
  });
}

const clearScrollHandler = () => scrollHandler({ target: { scrollTop: 0 } });

watch(() => route.fullPath, () => {
  requestAnimationFrame(() => {
    clearScrollHandler();
  })

});

onBeforeMount(async () => {
  await fetchAboutBlock();
  await fetchWithLove();
  await fetchCollections();
  await fetchFAQ();
  await fetchThemes();
  await fetchMethodic();
})

onMounted(() => {
  init();

  if (isMobile.value) {
    requestAnimationFrame(() => {
      const scrollContainer = app.vueApp._container;
      scrollContainer.addEventListener('scroll', scrollHandler);
      clearScrollHandler();
    })
  };
});


</script>