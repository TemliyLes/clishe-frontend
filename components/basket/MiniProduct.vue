<template>
    <div class="mt-4">
        <div class="flex gap-2.5 md:gap-5 md:pr-8 relative h-[84px]">
            <img class="w-[84px] h-[84px] object-cover shrink-0" :src="url" alt="" />
            <div class="mb-2">
                <BasketHeader class="mb-[8px] pr-4 leading-[130%]">{{ data.name }}</BasketHeader>
                <BasketSimple v-if="!data.special" class="mb-[6px]">Количество цветов: {{
                    data.colorsCount }}</BasketSimple>
                <div class="flex md:gap-4 gap-2 !mb-0">
                    <BasketSimple class="font-medium" :class="isMobile ? '!text-[13px]' : ''">Стоимость: {{ data.withSale
                        ?
                        data.withSale.toFixed(2) :
                        data.cost.toFixed(2)
                        }} ₽
                    </BasketSimple>
                    <BasketSimple v-if="data.withSale" class="line-through !text-light"
                        :class="isMobile ? '!text-[13px]' : ''">{{
                            data.cost.toFixed(2) }} ₽
                    </BasketSimple>
                </div>
            </div>
            <MiniClose class="cursor-pointer absolute right-0 top-1" @click="removeFromBasket(data)" />
        </div>
        <div v-if="!noline" class="w-full my-4 h-px bg-overlight will-change-transform"></div>
    </div>
</template>
<script setup>
import { imgURL } from '~/helpers/api';
import BasketHeader from '../text/BasketHeader.vue';
import BasketSimple from '../text/BasketSimple.vue';
import MiniClose from './MiniClose.vue';
import { removeFromBasket } from '~/helpers/sail';
import { isMobile } from '~/helpers/break';
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