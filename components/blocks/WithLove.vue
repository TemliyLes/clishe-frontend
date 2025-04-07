<template>
    <div class="w-full h-screen relative mb-9 sm-mb-0">
        <Superheader :size="[50, 110]"
            class="absolute transition transition-transform duration-700 z-50 text-white inset-0 grid place-items-center text-center translate-y-0 sm:group-[.is-prev]:translate-y-1/2 sm:group-[.is-next]:-translate-y-1/2">
            with love<br />
            by heart<br />
            for love
        </Superheader>
        <div class="h-full w-full absolute top-0 left-0 z-10 bg-cover bg-fixed" :style="getBg">
            <!-- <img class="object-cover h-full w-full absolute top-0 z-10"
                src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c48ac43a3e486506e0a2bc_66c48b7545efb841da9331ed/scale_1200" /> -->
        </div>
    </div>
</template>

<script setup>
import Superheader from '~/components/text/Superheader.vue';

const URL = 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c48ac43a3e486506e0a2bc_66c48b7545efb841da9331ed/scale_1200'
const getBg = computed(() => `background-image: url(${URL})`)

</script>