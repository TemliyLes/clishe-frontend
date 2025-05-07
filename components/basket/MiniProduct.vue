<template>
    <div class="mt-4">
        <div class="flex gap-5 pr-8 relative">
            <img class="w-[84px] h-[84px] object-cover" :src="url" alt="" />
            <div class="mb-2">
                <BasketHeader class="mb-[12px] ">{{ data.name }}</BasketHeader>
                <BasketSimple v-if="!data.special" class="mb-[8px]">Количество цветов: {{
                    data.colorsCount }}</BasketSimple>
                <div class="flex gap-4">
                    <BasketSimple class="font-medium">Стоимость: {{ data.withSale ? data.withSale : data.cost }}
                    </BasketSimple>
                    <BasketSimple v-if="data.withSale" class="line-through !text-light">{{ data.cost }}
                    </BasketSimple>
                </div>
            </div>
            <MiniClose class="cursor-pointer absolute right-0 top-1" @click="removeFromBasket(data)" />
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

const isSpecialProduct = computed(() => props.data.special)
const url = isSpecialProduct.value ? props.data.url : imgURL(props?.data?.presets[0].beforeAfterPhotos?.[0]?.afterPhoto?.url)
</script>