<template>
    <div class="fixed h-bar z-50 w-full">
        <Container>
            <div class="flex justify-between w-full pt-4">
                <Logo class="h-6 -ml-12"></Logo>
                <div>12</div>
            </div>
        </Container>
        <div class="absolute bottom-0 left-0 h-px bg-red-500 w-full"></div>
    </div>

</template>

<script setup>
import Container from '../basic/Container.vue';
import Logo from '~/assets/icons/Logo.vue';
import { isMobile } from '~/helpers/break';

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