<template>
    <div>
        <div class="bg-white relative overflow-hidden">
            <Screen bg="#E8E4D9" mbg="#E8E4D9" class="z-30">
                <StartScreen class=" pt-16 pb-4 sm:py-0" />
            </Screen>
            <Screen over blured id="about_screen">
                <About />
            </Screen>
            <Screen blured scroll :full="isMobile">
                <Horizontal :imgs="aboutMedia" v-if="!isMobile" />
                <HorizontalMobile :imgs="aboutMedia" v-if="isMobile" />
            </Screen>
            <Screen white blured full>
                <WithLove />
            </Screen>
            <Screen blured>
                <Methodic />
            </Screen>
            <Screen scroll blured full>
                <PresetsDemo />
            </Screen>
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Screen from '~/components/basic/Screen.vue';
import { usePresetsStore } from '~/stores/store';

import StartScreen from '~/components/blocks/StartScreen.vue';
import About from '~/components/blocks/About.vue';
import WithLove from '~/components/blocks/WithLove.vue';
import Methodic from '~/components/blocks/Methodic.vue';
import PresetsDemo from '~/components/blocks/PresetsDemo.vue';
import Horizontal from '~/components/sliders/Horizontal.vue';
import HorizontalMobile from '~/components/sliders/HorizontalMobile.vue';
import Footer from '~/components/footer/Footer.vue';

import { isMobile } from '~/helpers/break';
import { clear } from '~/helpers/scroll';
import { imgURL } from '~/helpers/api';

onBeforeMount(() => {
    clear();
});

const store = usePresetsStore();

const aboutMedia = computed(() => store?.aboutWorks?.data?.works?.map(el => imgURL(el.url)));


</script>