<template>
    <div class="py-12">
        <Header>Presets | Color collections</Header>
        <PresetCollection></PresetCollection>
        <PresetCollection></PresetCollection>
        <PresetCollection></PresetCollection>
        <div class="cursor-pointer flex gap-4 items-center justify-center relative">
            <NuxtLink to="/presets">
                <SimpleText class="text-main" :size="[14, 16]">Посмотреть все колекции</SimpleText>
            </NuxtLink>
            <NextArrow class="-mt-[7px]" />
        </div>
    </div>
</template>

<script setup>
import Header from '../text/Header.vue';
import NextArrow from '~/assets/icons/NextArrow.vue';
import PresetCollection from '../presets/PresetCollection.vue';
import SimpleText from '../text/SimpleText.vue';
</script>