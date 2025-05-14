<template>
    <div class="relative">
        <Screen scroll blured class="sm:pb-0 pb-12 mt-24 sm:mt-0">
            <Superheader class="!mt-12 !mb-10 !mt-5 !mb-4">Presets | Color collections</Superheader>
            <Tags @navigate="navigate" :tags="collections" />
            <div v-if="collections">
                <div v-for="(pc, index) in collections" :key="index" :ref="el => { refPresets[pc.id] = el }">
                    <PresetCollection :collection="pc" />
                </div>
            </div>
            <div class="pt-16 sm:min-h-[650px] sm:pb-32">
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
import PresetCollection from '~/components/presets/PresetCollection.vue';
import Footer from '~/components/footer/Footer.vue';
import Tags from '~/components/tags/Tags.vue';
import Faq from '../components/presets/Faq.vue';
import Title from '~/components/text/Title.vue';

import { clear, scrollToElement } from '~/helpers/scroll';

onBeforeMount(() => {
    clear()
});
import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();
const refPresets = ref([])

const collections = computed(() => store?.presetCollections?.data)

const navigate = id => {
    scrollToElement(refPresets.value[id]);
}

</script>