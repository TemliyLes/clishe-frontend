<template>
    <div class="pt-16 pb-8 sm:py-12">
        <Header>Presets | Color collections</Header>
        <div v-if="store.presetCollections">
            <div v-for="(pc, index) in store.presetCollections.data" :key="index">
                <PresetCollection :collection="pc" />
            </div>
        </div>
        <div class="cursor-pointer flex gap-4 items-center justify-center relative my-12 sm:mt-0 sm:mb-16">
            <NuxtLink to="/presets">
                <SimpleText class="text-main" :size="[14, 16]">Посмотреть все колекции</SimpleText>
            </NuxtLink>
            <NextArrow class="-mt-[7px]" />
        </div>
        <Faq />
    </div>
</template>

<script setup>
import Header from '../text/Header.vue';
import NextArrow from '~/assets/icons/NextArrow.vue';
import PresetCollection from '../presets/PresetCollection.vue';
import SimpleText from '../text/SimpleText.vue';
import Faq from '../presets/Faq.vue';

import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();

</script>