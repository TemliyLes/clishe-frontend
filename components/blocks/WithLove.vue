<template>
    <div class="w-full h-screen relative mb-9 sm-mb-0 bg-red-100">
        <Superheader :size="[50, 110]"
            class="absolute transition transition-transform duration-700 z-50 text-white inset-0 grid place-items-center text-center translate-y-0 sm:group-[.is-prev]:translate-y-1/2 sm:group-[.is-next]:-translate-y-1/2">
            with love<br />
            by heart<br />
            for love
        </Superheader>
        <img v-onload
            src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c48ac43a3e486506e0a2bc_66c48b7545efb841da9331ed/scale_1200"
            alt="" inert class="opacity-0 absolute">
        <div class="h-full w-full absolute top-0 left-0 z-10 bg-cover bg-fixed" :style="imgBg"></div>
    </div>
</template>

<script setup>
import Superheader from '~/components/text/Superheader.vue';

const imgBg = ref('');

const vOnload = {
    mounted: e => {
        const srcImg = e.getAttribute('src');
        imgBg.value = `background-image:url(${srcImg})`
    }
}

</script>