<template>
    <div class="relative z-3">
        <transition appear @enter="onInit">
            <div v-if="!isMobile && exist && !scroll" @wheel="onWheel"
                :style="[transformStylesPerCurrentSlide, transDuration]"
                class="bg-yellow-300 w-full h-dvh fixed top-0 left-0 transition">
                <slot />
            </div>
        </transition>
        <transition appear @enter="onInit">
            <div v-if="!isMobile && exist && scroll" :style="[transformStylesPerCurrentSlide, transDuration]"
                @wheel="onWheelWithScroll" @scroll="onScroll"
                class="bg-blue-300 h-dvh fixed top-0 left-0 transition overflow-auto" style="padding: 40%;">
                isScrollerInTop - {{ isScrollerInTop }}
                <slot />
                isScrollerInBottom - {{ isScrollerInBottom }}
            </div>
        </transition>
        <div v-if="isMobile" class="w-full relative">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';

import { pushScreen, currentSlide, screenList, slideUp, locked, ANIMATION_DELAY } from '~/helpers/scroll';

const props = defineProps({
    scroll: {
        type: Boolean,
        default: false
    }
});


const isScrollerInTop = ref(true);
const isScrollerInBottom = ref(false);

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

const onWheelWithScroll = (e) => {
    if (!locked.value) {
        if (isScrollerInTop.value && e.deltaY < 0) {
            slideUp(true)
        };
        if (isScrollerInBottom.value && e.deltaY > 0) {
            slideUp(false)
        };
    }
}

const onScroll = (e) => {
    if (!e.target.scrollTop) {
        isScrollerInTop.value = true
    } else {
        isScrollerInTop.value = false
    }

    if (Math.round(e.target.offsetHeight + e.target.scrollTop) >= e.target.scrollHeight) {
        isScrollerInBottom.value = true
    } else {
        isScrollerInBottom.value = false
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