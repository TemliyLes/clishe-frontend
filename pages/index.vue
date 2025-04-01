<template>
    <div class="bg-white relative">
        <Screen bg="#E8E4D9" class="z-30">
            <StartScreen />
        </Screen>
        <Screen over blured id="about_screen">
            <About />
        </Screen>
        <Screen scroll>
            <Horizontal />
        </Screen>
        <Screen white blured full>
            <WithLove />
        </Screen>
        <Screen blured>
            <Methodic></Methodic>
        </Screen>
        <Screen scroll blured>
            <PresetsDemo />
        </Screen>
        <Screen bg="#3B3938" blured>
            <Footer></Footer>
        </Screen>
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
import Footer from '~/components/footer/Footer.vue';

import { clear } from '~/helpers/scroll';

onBeforeMount(() => {
    clear()
})
</script>