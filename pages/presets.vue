<template>
    <div class="relative">
        <Screen scroll blured class="sm:pb-0 pb-12">
            <Superheader class="sm:!mt-16 !mt-24">Presets | Color collections</Superheader>
            <PresetCollection />
            <PresetCollection />
            <PresetCollection />
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
})
</script>