<template>
    <div>
        <Superheader>
            фото — это не щелк<br />
            это миллисекунда жизни
        </Superheader>
        <ClientOnly>
            <img v-if="!isMobile"
                class="aspect-mainscreen sm:h-mainscreen object-cover object-[0, 75%] w-full mt-4 sm:mt-0"
                src="/public/alinabg.jpg" />
            <img v-if="isMobile"
                class="aspect-mainscreen sm:h-mainscreen object-cover object-[0, 75%] w-full mt-4 sm:mt-0"
                src="/public/alinabg_m.jpg" />
        </ClientOnly>
    </div>
</template>

<script setup>
import Superheader from '../text/Superheader.vue';
import { isMobile } from '~/helpers/break';
</script>