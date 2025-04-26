<template>
    <div class="relative">
        <Screen scroll blured class="sm:pb-0 pb-12 mt-24 sm:mt-0">
            <Superheader>Presets | Color collections</Superheader>
            <Tags @navigate="navigate" :tags="collections" />
            <div v-if="collections">
                <div v-for="(pc, index) in collections" :key="index" :ref="el => { refPresets[pc.id] = el }">
                    <PresetCollection :title="pc.name" :description="pc.description" :presets="pc.presets"
                        :color-count="pc.colorsCount" :cost="pc.cost" />
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