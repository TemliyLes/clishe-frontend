<template>
    <div>
        <div class="flex justify-between">
            <BasketHeader>Корзина</BasketHeader>
            <Close />
        </div>
        <div>
            <div class="relative" v-if="products.length">
                <div>Состав заказа</div>
                <div v-for="(product, index) in products" :key="index">
                    <MiniProduct :data="product" />
                </div>
            </div>
            <div class="bg-yep py-3 pl-2.5 pr-8 mt-4 rounded-xl relative" v-if="alertCanSee && products?.length === 1">
                <SimpleText :style="fontSize([16, 16])">
                    при приобретении двух и более коллекций цветов <span class="font-medium monster">скидка - 10
                        %</span>
                </SimpleText>
                <NuxtLink to="/presets" @click="closeBasket">
                    <BasketHeader class="mt-3 cursor-pointer">Купить</BasketHeader>
                </NuxtLink>
                <MiniClose @click="closeAlert" class="absolute top-4 right-4 cursor-pointer" />
            </div>
        </div>
    </div>
</template>


<script setup>
import SimpleText from '../text/SimpleText.vue';
import Close from './Close.vue';
import BasketHeader from '../text/BasketHeader.vue';
import { fontSize } from '~/helpers/freeze';
import { closeBasket, products } from '~/helpers/sail';
import MiniClose from './MiniClose.vue';
import MiniProduct from './MiniProduct.vue';

const alertCanSee = ref(true);
const closeAlert = () => {
    alertCanSee.value = false;
}

</script>