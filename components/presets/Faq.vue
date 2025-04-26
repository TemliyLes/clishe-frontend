<template>
    <div class="relative">
        <div class="cursor-pointer" v-for="(item, index) in faq" :key="index" @click="setActive(index)">
            <div class="flex justify-between">
                <SimpleText class="pr-6" big>{{ item.question }}</SimpleText>
                <Cross :opened="testActive(index)" />
            </div>

            <Collapsed :active="testActive(index)">
                <SimpleText class="!my-4">{{ item.answer }}</SimpleText>
            </Collapsed>
            <div class="my-6 h-px w-full bg-light will-change-transform"></div>
        </div>
    </div>
</template>

<script setup>
import SimpleText from '../text/SimpleText.vue';
import Cross from '../other/Cross.vue';
import Collapsed from '../other/Collapsed.vue';

import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();

const currentIndex = ref(0);
const setActive = (index) => currentIndex.value = index;
const testActive = (index) => currentIndex.value === index;


const faq = computed(() => store.faq?.data);
</script>
