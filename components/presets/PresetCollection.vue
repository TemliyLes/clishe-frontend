<template>
    <div class="mt-12 sm:my-16">
        <SimpleText big class="mb-4 sm:mb-6">{{ collection.name }}</SimpleText>
        <SimpleText>{{ collection.description }}</SimpleText>
        <div class="relative mt-12 mb-4 sm:my-12 transition transition-all" ref="slideContainer">
            <div v-for="(preset, index) in collection.presets" :key="index" class="transition duration-700"
                :class="[index ? 'absolute top-0 inset-0' : 'relative', testActive(index) ? 'opacity-100 z-40' : 'opacity-0 z-20']">
                <Preset :data="preset" :index="index + 1"></Preset>
            </div>
            <div class="absolute -top-1.5 right-0 flex gap-4 z-40 sm:scale-100 scale-75 origin-top-right">
                <div @click="changePreset(true)" class="cursor-pointer">
                    <SliderArrow />
                </div>
                <div @click="changePreset(false)" class="cursor-pointer rotate-180">
                    <SliderArrow />
                </div>
            </div>
        </div>
        <SimpleText>Количество цветов: {{ collection.colorCount }}</SimpleText>
        <SimpleText>Стоимость: {{ collection.cost }}</SimpleText>

        <div class="flex gap-4 my-3 sm:my-12">
            <Button @click="addToBasket(collection)" :class="basisMobile" title="Купить"></Button>
            <NuxtLink :class="basisMobile" :to="`preset-${trimmed}`" v-if="hasMoreBtn">
                <Button white></Button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import Preset from './Preset.vue';
import SliderArrow from '~/assets/icons/SliderArrow.vue';
import SimpleText from '../text/SimpleText.vue';
import Button from '../basic/Button.vue';
import { isMobile } from '~/helpers/break';

import { addToBasket } from '~/helpers/sail';
const props = defineProps({
    collection: {
        type: Object,
        default: () => { },
    },
    hasMoreBtn: {
        type: Boolean,
        default: true
    }
});

const slideContainer = ref(null);

const activeIndex = ref(0);

const testActive = (index) => index === activeIndex.value;
const changePreset = (bool) => {
    if (!bool) {
        activeIndex.value++;
    } else {
        activeIndex.value--;
    }
    if (activeIndex.value > props.presets.length - 1) {
        activeIndex.value = 0;
    }
    if (activeIndex.value < 0) {
        activeIndex.value = props.presets.length - 1;
    }
}

const trimmed = computed(() => props?.collection?.name.replaceAll(' ', '-').toLowerCase());

const basisMobile = computed(() => isMobile.value ? 'basis-1/2' : '')


watch(() => activeIndex.value, val => {
    if (isMobile.value) {
        const childs = slideContainer.value?.children;
        const innerContainer = childs[val]?.children[0];
        const realHeight = innerContainer.offsetHeight;
        slideContainer.value.style.height = realHeight + 'px'
    }
});
</script>