<template>
    <div>
        <div class="bg-white relative overflow-hidden pt-6 sm:pt-0">
            <Screen bg="#E8E4D9" class="z-30">
                <StartScreen />
            </Screen>
            <Screen over blured id="about_screen">
                <About />
            </Screen>
            <Screen blured scroll :full="isMobile">
                <Horizontal :imgs="imgs" v-if="!isMobile" />
                <HorizontalMobile :imgs="imgs" v-if="isMobile" />
            </Screen>
            <Screen white blured full>
                <WithLove />
            </Screen>
            <Screen blured>
                <Methodic />
            </Screen>
            <Screen scroll blured>
                <PresetsDemo />
            </Screen>
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup>

import Screen from '~/components/basic/Screen.vue';

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

onBeforeMount(() => {
    clear()
});


const imgs = [
    'https://www.ukorona.ru/upload/adwex.minified/webp/97e/85/97e3e16efe3b1427aea69b8fa1c9c929.webp',
    'https://img.freepik.com/free-photo/side-view-geese-grass_23-2148580043.jpg?semt=ais_hybrid&w=740',
    'https://cdn.botanichka.ru/wp-content/uploads/2021/02/domashnie-gusi-luchshie-porodyi-i-osobennosti-soderzhaniya-01.jpg',
    'https://ciplenok.com/content/uploads/images/domashnie-gusi.jpg',
    'https://house-animals.ru/sites/default/files/media/user-1/gusi-dvor.jpg'
];

</script>