<template>
    <transition appear @enter="onInit">
        <div v-if="!isMobile && exist" @wheel="onWheel" :style="transformStylesPerCurrentSlide"
            class="bg-yellow-300 w-full h-screen fixed top-0 left-0 transition">
            ---slideIndex-- {{ slideIndex }}
            <slot />
        </div>
    </transition>
    <div v-if="isMobile" class="w-full relative">
        <slot />
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';
import { pushScreen, currentSlide, slideUp, locked } from '~/helpers/scroll';

const exist = ref(false);

const slideIndex = ref(0);

const transformStylesPerCurrentSlide = computed(() => {
    const val = slideIndex.value === currentSlide.value ? '0' : '-100%'
    return `transform: translateY(${val})`
});

const onWheel = (e) => {
    if (!locked.value) {
        const up = e.deltaY > 0 ? false : true;
        slideUp(up);
    }
}

onMounted(() => {
    exist.value = true;
});

const onInit = (e) => {
    slideIndex.value = pushScreen(e);
}
</script>