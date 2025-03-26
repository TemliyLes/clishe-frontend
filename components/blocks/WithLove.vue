<template>
    <div v-stack>
        <Superheader :size="[50, 110]" class="absolute z-50 text-white inset-0 grid place-items-center text-center">
            with love<br />
            by heart<br />
            for love
        </Superheader>
        <Image
            src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c48ac43a3e486506e0a2bc_66c48b7545efb841da9331ed/scale_1200" />
    </div>
</template>

<script setup>
import Superheader from '~/components/text/Superheader.vue';
import Image from '~/components/basic/Image.vue';


</script>