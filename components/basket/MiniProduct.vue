<template>
    <div class="mt-4">
        <div class="flex gap-5 pr-8 relative">
            <img class="w-[84px] aspect-square" :src="imgURL(data?.presets[0].beforeAfterPhotos?.[0]?.afterPhoto?.url)"
                alt="" />
            <div class="mb-2">
                <BasketHeader>{{ data.name }}</BasketHeader>
                <BasketSimple class="mt-2 mb-1">Количество цветов: {{ data.colorsCount }}</BasketSimple>
                <BasketSimple class="font-medium">Стоимость: {{ data.cost }}</BasketSimple>
            </div>
            <MiniClose class="cursor-pointer absolute right-0 top-0" @click="removeFromBasket(data)" />
        </div>
        <div v-if="!noline" class="w-full my-4 h-px bg-light"></div>
    </div>
</template>
<script setup>
import { imgURL } from '~/helpers/api';
import BasketHeader from '../text/BasketHeader.vue';
import BasketSimple from '../text/BasketSimple.vue';
import MiniClose from './MiniClose.vue';
import { removeFromBasket } from '~/helpers/sail';
const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    noline: {
        type: Boolean,
        default: () => { }
    }
});
</script>