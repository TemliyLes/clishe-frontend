<template>
    <div class="relative">
        <Screen scroll blured class="sm:pb-0 pb-12">
            <div v-if="store.presetCollections">
                <div v-for="(pc, index) in store.presetCollections.data" :key="index">
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

import { clear } from '~/helpers/scroll';

onBeforeMount(() => {
    clear()
});
import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();
</script>