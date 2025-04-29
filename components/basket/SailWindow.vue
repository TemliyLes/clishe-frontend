<template>
    <div :inert="!isOpenedBasket" class="fixed w-full h-dvh top-0 left-0 z-total">
        <div class="absolute top-0 left-0 bg-trace w-full h-screen backdrop-blur-md transition duration-700 will-change-transform"
            :class="isOpenedBasket ? 'opacity-100' : 'opacity-0'" @click="closeBasket">
        </div>
        <div class="absolute w-full h-screen pl-5 py-10 pr-1 sm:w-[500px] bg-white top-0 right-0 will-change-transform transform transition duration-700"
            :class="isOpenedBasket ? 'translate-x-0' : 'translate-x-full'">
            <BasketContent />
        </div>
    </div>
</template>


<script setup>
import { isOpenedBasket, closeBasket } from '~/helpers/sail';
import BasketContent from './BasketContent.vue';

</script>