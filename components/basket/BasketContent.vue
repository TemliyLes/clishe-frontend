<template>
    <div class="pb-[170px] overflow-auto h-screen pr-5">
        <div class="flex justify-between">
            <BasketHeader>Корзина</BasketHeader>
            <Close />
        </div>
        <div v-if="products.length">
            <div class="relative mt-6">
                <BasketSimple class="text-[16px]">Состав заказа</BasketSimple>
                <div v-for="(product, index) in productsWithSale" :key="product.id">
                    <MiniProduct :noline="index === products.length - 1" :data="product" />
                </div>
            </div>
            <div class="bg-yep py-3 pl-2.5 pr-8 mt-4 rounded-xl relative"
                v-if="alertCanSee && onlyPresets.length === 1">
                <SimpleText :style="fontSize([16, 16])">
                    при приобретении двух и более коллекций цветов <span class="font-medium monster">скидка - 10
                        %</span>
                </SimpleText>
                <NuxtLink to="/presets" @click="closeBasket">
                    <BasketHeader class="mt-3 cursor-pointer">Купить</BasketHeader>
                </NuxtLink>
                <MiniClose @click="closeAlert" class="absolute top-4 right-4 cursor-pointer" />
            </div>

            <div class="mt-6">
                <BasketHeader>Итого {{ total }} ₽</BasketHeader>
            </div>

            <BasketSimple class="mt-4 text-[16px]">Состав заказа</BasketSimple>
        </div>
        <div class="mt-4" v-else>
            <BasketSimple class="text-[16px]">Корзина пока пуста</BasketSimple>
        </div>
    </div>
</template>


<script setup>
import SimpleText from '../text/SimpleText.vue';
import Close from './Close.vue';
import BasketHeader from '../text/BasketHeader.vue';
import BasketSimple from '../text/BasketSimple.vue';
import { fontSize } from '~/helpers/freeze';
import { closeBasket, products } from '~/helpers/sail';
import MiniClose from './MiniClose.vue';
import MiniProduct from './MiniProduct.vue';

const alertCanSee = ref(true);
const closeAlert = () => {
    alertCanSee.value = false;
}


const BASIC_SALE = 0.1;
const sale = computed(() => onlyPresets.value.length >= 2 ? BASIC_SALE : 0);

const onlyPresets = computed(() => products.value.filter((pr) => !pr.special));

const productsWithSale = computed(() => products.value.map((el) => {
    console.log(el.special)
    if (!el.special) {
        el.withSale = sale.value ? el.cost * (1 - sale.value) : 0;
    } else {
        el.withSale = null
    }

    return el;
}));

const total = computed(() => {
    return productsWithSale.value.reduce((acc, current) => {
        const addition = current.withSale ? current.withSale : current.cost;
        return acc + addition;
    }, 0)
})

</script>