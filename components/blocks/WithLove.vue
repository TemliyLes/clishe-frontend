<template>
    <div class="w-full h-screen relative mb-9 sm-mb-0 bg-red-100">
        <Superheader :size="[50, 110]"
            class="absolute transition transition-transform duration-700 z-50 text-white inset-0 grid place-items-center text-center translate-y-0 sm:group-[.is-prev]:translate-y-1/2 sm:group-[.is-next]:-translate-y-1/2">
            with love<br />
            by heart<br />
            for love
        </Superheader>
        <div class="text-main">imgBg {{ imgBg }}</div>
        <div class="h-full w-full absolute top-0 left-0 z-10 bg-cover bg-fixed" :style="imgBg"></div>
    </div>
</template>

<script setup>
import Superheader from '~/components/text/Superheader.vue';
import { usePresetsStore } from '~/stores/store';
import { imgURL } from '~/helpers/api';
const store = usePresetsStore();

const imgBg = computed(() => `background-image: url(${imgURL(store.withLove?.data?.background?.url)}`);

</script>
