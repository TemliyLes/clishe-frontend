<template>
    <div>
        <Screen blured scroll>
            <Superheader class="sm:!mt-16 !mt-24">{{ name }}</Superheader>
            <Header class="!mt-12" v-if="data">
                {{ data.detailPageTitle }}
            </Header>
            <PresetCollection v-if="data" :has-more-btn="false" :title="data.name" :description="data.description"
                :presets="data.presets" :color-count="data.colorsCount" :cost="data.cost" />
            <div
                class="w-full mt-9 sm:mt-0 sm:h-screen h-96 absolute overflow-hidden -ml-container sm:-ml-container-d pt-screen">
                <img class="object-cover h-full w-full" :src="imgURL(imgSrc)" />
            </div>
            <div class="h-96 sm:h-screen"></div>
            <div class="pt-16 sm:min-h-[650px] sm:pb-72">
                <div class="block sm:flex gap-4">
                    <div class="basis-1/3">
                        <Title class="!mt-1">часто задаваемые вопросы</Title>
                    </div>
                    <div class="basis-3/4">
                        <Faq />
                    </div>
                </div>
            </div>
        </Screen>
        <Footer />
    </div>
</template>

<script setup>
import Screen from '~/components/basic/Screen.vue';
import Superheader from '~/components/text/Superheader.vue';
import Header from '~/components/text/Header.vue';
import PresetCollection from '~/components/presets/PresetCollection.vue';
import Title from '~/components/text/Title.vue';
import Faq from '~/components/presets/Faq.vue';
import Footer from '~/components/footer/Footer.vue';

import { imgURL } from '~/helpers/api';

import { usePresetsStore } from '#imports';
const store = usePresetsStore();



const route = useRoute();
const name = route.params.name;



import { clear } from '~/helpers/scroll';

onBeforeMount(() => {
    clear();
    if (!store.presetCollections) {
        store.fetchCollections();
    }
});

const data = computed(() => store?.presetCollections?.data?.find(el => el.name.toLowerCase().replace(" ", "-") === name));
const imgSrc = computed(() => data.value?.detailPageImage?.[0]?.url)
</script>