<template>
    <div class="relative group" :class="classByScreenPosition">
        <transition appear @enter="onInit">
            <div v-if="!isMobile && exist && !scroll" @wheel="onWheel"
                :style="[transformStylesPerCurrentSlide, transDuration, bgStyle]" :class="!full ? 'pt-bar' : ''"
                class="w-full h-screen fixed top-0 left-0 transition overflow-hidden group-[.is-prev]:pointer-events-none group-[.is-next]:pointer-events-none"
                :blured="blured" :white="white">
                <Container :full="full">
                    <slot />
                </Container>
            </div>
        </transition>
        <transition appear @enter="onInit">
            <div v-if="!isMobile && exist && scroll" :style="[transformStylesPerCurrentSlide, transDuration]"
                @wheel="onWheelWithScroll" @scroll="onScroll"
                class="h-screen w-full fixed top-0 left-0 transition overflow-auto pt-bar group-[.is-prev]:pointer-events-none group-[.is-next]:pointer-events-none"
                :white="white" :blured="blured">
                <Container :full="full">
                    <slot />
                </Container>
            </div>
        </transition>
        <div v-if="isMobile" class="w-full relative pt-bar" :blured="blured" :white="white">
            <Container :full="full">
                <slot />
            </Container>
        </div>
    </div>
</template>

<script setup>
import { isMobile } from '~/helpers/break';

import { pushScreen, currentSlide, screenList, slideUp, locked, ANIMATION_DELAY } from '~/helpers/scroll';

import Container from './Container.vue';

const props = defineProps({
    scroll: {
        type: Boolean,
        default: false,
    },
    full: {
        type: Boolean,
        default: false,
    },
    bg: {
        type: String,
        default: 'white',
    },
    blured: {
        type: Boolean,
        default: false,
    },
    white: {
        type: Boolean,
        default: false,
    }
});


const isScrollerInTop = ref(true);
const isScrollerInBottom = ref(false);

const exist = ref(false);

const inst = ref();
const slideIndex = computed(() => screenList.value.indexOf(inst.value))


const isActiveScreen = computed(() => slideIndex.value === currentSlide.value);
const isPrevScreen = computed(() => slideIndex.value < currentSlide.value);
const isNextScreen = computed(() => slideIndex.value > currentSlide.value);

const classByScreenPosition = computed(() => {
    if (isActiveScreen.value) {
        return 'is-active'
    }
    if (isPrevScreen.value) {
        return 'is-prev'
    }
    if (isNextScreen.value) {
        return 'is-next'
    }
})

const transformStylesPerCurrentSlide = computed(() => {
    let val;
    if (isActiveScreen.value) {
        val = '0';
    }
    if (isPrevScreen.value) {
        val = '-100%';
    }
    if (isNextScreen.value) {
        val = '100%';
    }
    return `transform: translateY(${val})`
});

const transDuration = computed(() => `transition-duration:${ANIMATION_DELAY}ms`);

const bgStyle = computed(() => `background:${props.bg}`);

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