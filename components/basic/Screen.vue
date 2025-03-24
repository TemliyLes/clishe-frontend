<template>
    <transition appear @enter="onInit">
        <div v-if="!isMobile && exist" @wheel="onWheel" :style="[transformStylesPerCurrentSlide, transDuration]"
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
import { pushScreen, currentSlide, screenList, slideUp, locked, ANIMATION_DELAY } from '~/helpers/scroll';

const exist = ref(false);

const inst = ref();
const slideIndex = computed(() => screenList.value.indexOf(inst.value))

const transformStylesPerCurrentSlide = computed(() => {
    let val;
    if (slideIndex.value === currentSlide.value) {
        val = '0';
    }
    if (slideIndex.value < currentSlide.value) {
        val = '-100%';
    }
    if (slideIndex.value > currentSlide.value) {
        val = '100%';
    }
    return `transform: translateY(${val})`
});

const transDuration = computed(() => `transition-duration:${ANIMATION_DELAY}ms`);

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
    inst.value = e;
    pushScreen(e);
}
</script>