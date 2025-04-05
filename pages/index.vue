<template>
    <div>
        <div class="bg-white relative overflow-hidden">
            <Screen bg="#E8E4D9" class="z-30">
                <StartScreen />
            </Screen>
            <Screen over blured id="about_screen">
                <About />
            </Screen>
            <Screen blured scroll class="opacity-0">
                <Horizontal v-if="!isMobile" />
                <HorizontalMobile v-else />
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
})
</script>