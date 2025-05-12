<template>
    <div class="overflow-hidden relative">
        <Container>
            <div class="pt-16 pb-8 md:py-12">
                <Header>Presets | Color collections</Header>
                <div v-if="store.presetCollections">
                    <div v-for="(pc, index) in store.presetCollections.data" :key="index">
                        <PresetCollection :collection="pc" />
                    </div>
                </div>
                <div
                    class="cursor-pointer flex gap-4 items-center justify-center relative my-16 md:mt-0 md:mb-16 relative">
                    <div class="absolute h-px bg-light w-screen -top-6"></div>
                    <div class="absolute h-px bg-light w-screen top-10"></div>
                    <NuxtLink to="/presets">
                        <SimpleText class="text-main" :size="[14, 16]">Посмотреть все колекции</SimpleText>
                    </NuxtLink>
                    <NextArrow class="-mt-[7px]" />
                </div>
                <LearningMini />
                <Faq />
            </div>
        </Container>
    </div>
</template>

<script setup>
import Header from '../text/Header.vue';
import NextArrow from '~/assets/icons/NextArrow.vue';
import PresetCollection from '../presets/PresetCollection.vue';
import SimpleText from '../text/SimpleText.vue';
import Faq from '../presets/Faq.vue';
import LearningMini from './LearningMini.vue';
import Container from '../basic/Container.vue';

import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();

</script>