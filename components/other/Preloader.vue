<template>
    <div class="fixed top-0 left-0 z-preloader w-full h-screen bg-beige transition-all duration-700 ease-in-out will-change-transform"
        :class="out ? '-translate-y-full' : 'translate-y-0'">
        <div class="grid place-items-center w-full h-full absolute transition transition-opacity will-change-transform duration-500 delay-300"
            :class="flag ? 'opacity-100' : 'opacity-0'">
            <div class="h-[124px] relative transition z-corner transition-all duration-300 ease-in-out will-change-transform"
                :style="`width: ${canvasWidth}px`">
                <PreloaderCorner class="absolute top-0 left-0"></PreloaderCorner>
                <PreloaderCorner class="absolute bottom-0 left-0 -scale-y-[100%]"></PreloaderCorner>
                <PreloaderCorner class="absolute bottom-0 right-0 -scale-x-[100%] -scale-y-[100%]"></PreloaderCorner>
                <PreloaderCorner class="absolute top-0 right-0 -scale-x-[100%]"></PreloaderCorner>

            </div>
            <div class="h-[73px] w-[140px] z-minus logo-group will-change-transform" :class="activeted ? 'active' : ''">
                <div class="svg-logo w-full h-full logo-elem logo-elem1 absolute"></div>
                <div class="svg-logo w-full h-full logo-elem logo-elem2 absolute"></div>
                <div class="svg-logo w-full h-full logo-elem logo-elem3 absolute"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PreloaderCorner from '~/assets/icons/PreloaderCorner.vue';

const FIRST_DELAY = 1000;
const SECOND_DELAY = 1500;

const flag = ref(false);
const activeted = ref(false);
const out = ref(false);

const canvasWidth = ref(164);

const setStepFirst = () => {
    canvasWidth.value = 320;
    activeted.value = true;
};
const setStepFull = () => {
    out.value = true;
};
onMounted(() => {
    requestAnimationFrame(() => {
        flag.value = true
    });
    setTimeout(setStepFirst, FIRST_DELAY);
    setTimeout(setStepFull, SECOND_DELAY);
})
</script>