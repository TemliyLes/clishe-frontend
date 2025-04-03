<template>
    <div v-got class="relative">
        <teleport to="#teleports">
            <div v-if="flag" class="will-change-transform transition duration-1000 ease-in-out"
                :style="classPerSlideIndex">
                <div class="fixed top-12 left-1/4 ml-[2%] transition delay-300 duration-700 will-change-transform"
                    :class="isActive ? 'opacity-100' : 'opacity-0'">
                    <Title>for your eyes</Title>
                </div>
                <div class="will-change-transform ml-[2%] left-1/4 ease-in-out transition duration-1000 relative origin-left"
                    :style="scalePerSlideIndex">
                    <div class="fixed flex no-wrap top-36 gap-12 pointer-events-none" :style="transformPerShift">
                        <div v-for="(item, index) in imgs" :key="index" class="aspect-square relative"
                            :style="`width: ${BASIC_WIDTH}px`">
                            <img class="object-cover w-full h-full" :src="item" />
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
        <div class="relative opacity-0 overflow-auto" :style="calculatedHeight">

        </div>
    </div>
</template>

<script setup>
import { currentSlide, screenList } from '~/helpers/scroll';
import Title from '../text/Title.vue';

const BASIC_WIDTH = 500;
const screenHeight = window?.innerHeight;

const imgs = [
    'https://www.ukorona.ru/upload/adwex.minified/webp/97e/85/97e3e16efe3b1427aea69b8fa1c9c929.webp',
    'https://img.freepik.com/free-photo/side-view-geese-grass_23-2148580043.jpg?semt=ais_hybrid&w=740',
    'https://cdn.botanichka.ru/wp-content/uploads/2021/02/domashnie-gusi-luchshie-porodyi-i-osobennosti-soderzhaniya-01.jpg',
    'https://ciplenok.com/content/uploads/images/domashnie-gusi.jpg',
    'https://house-animals.ru/sites/default/files/media/user-1/gusi-dvor.jpg'
];

const flag = ref(false)
const instanse = ref();

const shift = ref(0);
const transformPerShift = computed(() => `transform: translateX(-${shift.value}px)`)

const vGot = {
    mounted: e => instanse.value = e.parentElement.parentElement
}
const onScrollEvent = e => {
    shift.value = e.target.scrollTop
}
const slideIndex = computed(() => screenList.value.indexOf(instanse.value))
const isPrev = computed(() => slideIndex.value < currentSlide.value);
const isNext = computed(() => slideIndex.value > currentSlide.value);
const isActive = computed(() => slideIndex.value === currentSlide.value);

const classPerSlideIndex = computed(() => {
    if (isPrev.value) {
        return `transform: translateY(-${screenHeight}px); transition-duration: 0.7s;`
    }
    if (isNext.value) {
        return `transform: translateY(${screenHeight}px); transition-duration: 1s;`
    }
    return 'transform: translateY(0); transition-duration: 1s;'
})

const scalePerSlideIndex = computed(() => {
    if (isNext.value) {
        return `transform: scale(0.6) translateY(300px);  transition-duration: 0.7s;`
    } else {
        return `transform: scale(1) translateY(0);  transition-duration: 1s;`
    }
})



const calculatedHeight = computed(() => `height: ${imgs.length * (BASIC_WIDTH - 40)}px`)

onMounted(() => {
    requestAnimationFrame(() => {
        flag.value = true;
    })

    instanse.value.addEventListener('scroll', onScrollEvent);
})
</script>