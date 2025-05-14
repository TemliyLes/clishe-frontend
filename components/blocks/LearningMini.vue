<template>
    <div class="my-12 md:my-24">
        <div class="md:flex gap-4">
            <div class="basis-1/2 shrink-0">
                <h5 class="monster text-main text-[24px] md:text-[42px] leading-[120%]">Take pictures<br />with your
                    eyes</h5>
                <SimpleText class="mt-4 pr-4 !text-[18px]">Это вариант самостоятельного изучения материала в формате
                    закрытого
                    канала.
                </SimpleText>
                <img hidden v-loaded class="sticky w-full sm:top-5 my-4 md:my-9 sm:my-0 h-[388px] md:h-auto"
                    src="/public/learn.jpg" />
                <div class="flex gap-2 md:gap-4 basis-1/2 flex-wrap mt-4">
                    <Tag class="!h-[29px] !py-0.5 !px-3 !border-light" v-for="(tag, index) in tags" :key="index"
                        :data="{ name: tag, id: index }">
                    </Tag>
                </div>

                <div class="flex gap-4 my-6 sm:my-12">
                    <Button @click="addToBasket(basketItem)" :class="basisMobile"
                        :title="btnTitlePerBasketState"></Button>
                    <NuxtLink :class="basisMobile" to="learning">
                        <Button white></Button>
                    </NuxtLink>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="w-[49%]">
                    <img class="aspect-learn object-fit" src="/public/minilearn1.jpg" alt="">
                </div>
                <div class="w-[49%]">
                    <img class="aspect-learn object-fit" src="/public/minilearn2.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SimpleText from '../text/SimpleText.vue';
import Button from '../basic/Button.vue';
import { usePresetsStore } from '~/stores/store';
import { addToBasket, isInBasket } from '~/helpers/sail';
import Tag from '../tags/Tag.vue';
import { isMobile } from '~/helpers/break';

const store = usePresetsStore();
const tagList = computed(() => store.learning?.data?.tags);
const tags = computed(() => tagList?.value?.split(', '));
const imSr = ref(null);

const vLoaded = {
    mounted: e => {
        imSr.value = e.getAttribute('src')
    }
};
const cost = computed(() => store?.learning?.data?.cost);
const basketItem = computed(() => {
    return {
        special: true,
        name: 'Обучение',
        cost: cost.value,
        url: imSr.value,
        id: 'learning',
    }
});
const btnTitlePerBasketState = computed(() => !isInBasket(basketItem.value) ? 'Купить' : 'В корзине');
const basisMobile = computed(() => isMobile.value ? 'basis-1/2' : '')
</script>