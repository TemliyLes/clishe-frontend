<template>
    <div class="mt-2 mb-9">
        <Container class="my-6">
            <Title>
                Выпускные работы наших учеников
            </Title>
        </Container>

        <div class="w-full aspect-square relative" @touchstart="onTouchstart" @touchend="onTouchend">
            <img v-for="(img, index) in imgs" :key="index" :class="testActive(index) ? 'opacity-100' : 'opacity-0'"
                :src="img" :alt="'slide_' + index"
                class="absolute w-full h-full object-cover transition duration-700" />
        </div>
        <div class="grid place-items-center center my-3">
            <div class="flex gap-3">
                <div v-for="(btn, btnIndex) in imgs" :key="btnIndex" @click="setActive(btnIndex)">
                    <div class="w-2 h-2 rounded-full relative" :class="testActive(btnIndex) ? 'bg-main' : 'bg-light'">
                        <div class="absolute w-4 h-4 -mt-1 -ml-1 opacity-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Container from '../basic/Container.vue';
import Title from '../text/Title.vue';

const props = defineProps({
    imgs: Array,
    default: () => []
});

const activeIndex = ref(0);

const startPoint = ref(null)

const testActive = (index) => index === activeIndex.value;
const setActive = (index) => activeIndex.value = index;

const slideLeft = (left) => {
    if (left) {
        activeIndex.value--;
        if (activeIndex.value < 0) {
            activeIndex.value = props.imgs.length - 1;
        }
    }
    if (!left) {
        activeIndex.value++;
        if (activeIndex.value > props.imgs.length - 1) {
            activeIndex.value = 0
        }
    }
}

const onTouchstart = (e) => {
    startPoint.value = e.touches[0].clientX;
}

const onTouchend = (e) => {
    const left = e.changedTouches[0].clientX < startPoint.value ? true : false;
    slideLeft(left);
}
</script>