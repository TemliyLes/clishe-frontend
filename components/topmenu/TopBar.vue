<template>
    <div class="fixed h-bar z-50 w-full">
        <Container class="z-30">
            <div class="flex justify-between w-full pt-4">
                <Logo class="h-6 -ml-12 transition-all transition duration-700" :white="whitePower"></Logo>
                <div :class="whitePower ? 'text-white' : 'text-main'">MENU</div>
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

</template>

<script setup>
import Container from '../basic/Container.vue';
import Logo from '~/assets/icons/Logo.vue';
import { isMobile } from '~/helpers/break';
import { currentSlideElement } from '~/helpers/scroll';

const whitePower = computed(() => currentSlideElement.value?.getAttribute('white') === 'true');
const blurPower = computed(() => currentSlideElement.value?.getAttribute('blured') === 'true');

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



watch(() => currentSlideElement.value, () => {
    console.log(currentSlideElement.value?.getAttribute('white'));
})

</script>