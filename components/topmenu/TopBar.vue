<template>
    <div class="fixed h-bar z-50 w-full">
        <Container class="z-30">
            <div class="flex justify-between w-full pt-4">
                <Logo class="h-6 -ml-12" :white="white"></Logo>
                <div>ScreenBG </div>
                <div>12</div>
            </div>
        </Container>
        <div class="absolute bottom-0 left-0 w-full h-full backdrop-blur-sm transition z-minus"
            :class="blur ? 'opacity-1' : 'opacity-0'"></div>
        <div class="absolute bottom-0 left-0 h-px w-full" :class="white ? 'bg-white' : 'bg-grey'"></div>
    </div>

</template>

<script setup>
import Container from '../basic/Container.vue';
import Logo from '~/assets/icons/Logo.vue';
import { isMobile } from '~/helpers/break';

const blur = ref(true);
const white = ref(true);


const navs = [
    {
        title: 'Методическое пособие',
        url: '#',
    },
    {
        title: 'Адвент',
        url: '#',
    }, {
        title: 'Presets | Color collections',
        url: '#',
    }, {
        title: 'Обучение',
        url: '#',
    },
];

</script>