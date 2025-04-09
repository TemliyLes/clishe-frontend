<template>
    <div class="fixed h-bar z-bar w-full topmenu" v-if="!isMobile">
        <Container class="z-30">
            <div class="flex justify-between w-full pt-4">
                <NuxtLink to="/">
                    <Logo class="h-6 -ml-12" :white="whitePower" />
                </NuxtLink>
                <div class="transition-all transition duration-700 flex"
                    :class="whitePower ? 'text-white' : 'text-main'">
                    <div class="flex gap-8">
                        <p v-for="nav in navs" :key="nav.title">
                            <NuxtLink class="monster cursor-pointer" :to="nav.to">
                                {{ nav.title }}
                            </NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
        <div class="absolute bottom-0 left-0 w-full h-full backdrop-blur-sm transition z-minus transition transition-opacity"
            :class="blurPower ? 'opacity-1' : 'opacity-0'">
            <div class="absolute opacity-40 top-0 left-0 w-full h-full transition-all transition duration-700"
                :class="whitePower ? 'bg-grey' : 'bg-white'">
            </div>
        </div>
        <div class="absolute bottom-0 left-0 h-px w-full transition-all transition duration-700"
            :class="whitePower ? 'bg-white' : 'bg-grey'">
        </div>
    </div>
    <TopBarMobile :mb="mb" :mw="mw" :ms="ms" :navs="navsWithMain" v-else />
</template>

<script setup>
import Container from '../basic/Container.vue';
import Logo from '~/assets/icons/Logo.vue';
import { isMobile } from '~/helpers/break';

import { currentSlideElement } from '~/helpers/scroll';
import TopBarMobile from './TopBarMobile.vue';

const props = defineProps({
    mb: {
        type: String,
        default: false,
    },
    mw: {
        type: String,
        default: false,
    },
    ms: {
        type: String,
        default: '',
    },
})

const whitePower = computed(() => currentSlideElement.value?.getAttribute('white') === 'true');
const blurPower = computed(() => currentSlideElement.value?.getAttribute('blured') === 'true');

const navs = [
    {
        title: 'Методическое пособие',
        to: 'methodic',
    },
    {
        title: 'Presets | Color collections',
        to: 'presets',
    },
];
const main = {
    title: 'Главная',
    to: ''
}

const navsWithMain = computed(() => [main, ...navs])

</script>