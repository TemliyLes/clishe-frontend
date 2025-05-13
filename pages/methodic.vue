<template>
    <div class="overflow-hidden" v-if="store.methodic">
        <Screen :blured="isMobile" full white bg="none">
            <MethScreen :btn-title="btnTitlePerBasketState" @buy="addToBasket(methodicProduct)" :count="count" />
        </Screen>
        <Screen scroll blured>
            <div class="py-12 sm:pb-24">
                <Header restructed :static="isMobile" :static-active="isActiveHeader">
                    {{ title }}
                </Header>
                <div class="sm:flex sm:my-12 gap-6">
                    <div class="basis-1/4 pr-4">
                        <img v-loaded class="sticky w-full sm:top-5 my-9 sm:my-0" src="/public/alinacliche.png" />
                    </div>
                    <div class="basis-3/4">
                        <SimpleText big>
                            {{ description }}
                        </SimpleText>
                        <SimpleText v-for="(p, pIndex) in body" :key="pIndex" class="!my-4">
                            {{ p.children[0]?.text }}
                        </SimpleText>
                        <div class="mt-6 sm:mt-12">
                            <div v-for="(item, index) in methodicData" :key="index">
                                <Title class="!mb-3">{{ item.title }}</Title>
                                <SimpleText>{{ item.description }}</SimpleText>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:flex sm:pt-12 pt-9 gap-6" v-if="themes">
                    <div class="basis-1/4">
                        <Title class="!mt-0 sticky top-5">Темы</Title>
                    </div>
                    <div class="basis-3/4">
                        <div class="flex gap-2 sm:gap-12" v-for="(theme, themeIndex) in themes" :key="themeIndex">
                            <SimpleText class="basis-4 shrink-0 mb-6">{{ themeIndex + 1 }}</SimpleText>
                            <SimpleText>{{ theme }}</SimpleText>
                        </div>
                        <div class="flex flex-col gap-6 sm:flex-row sm:justify-left sm:mt-9">
                            <Button @click="addToBasket(methodicProduct)" :title="btnTitlePerBasketState"
                                class="w-36" />
                            <SimpleText class="sm:mt-1">Стоимость: {{ cost }} ₽</SimpleText>
                        </div>
                    </div>
                </div>
            </div>
        </Screen>
        <Footer></Footer>
    </div>
</template>


<script setup>
import Screen from '~/components/basic/Screen.vue';
import Header from '~/components/text/Header.vue';
import SimpleText from '~/components/text/SimpleText.vue';
import Title from '~/components/text/Title.vue';
import Footer from '~/components/footer/Footer.vue';
import Button from '~/components/basic/Button.vue';

import MethScreen from '~/components/blocks/MethScreen.vue';
import { clear, scrollY } from '~/helpers/scroll';

import { usePresetsStore } from '~/stores/store';
import { isMobile } from '~/helpers/break';
import { addToBasket, isInBasket } from '~/helpers/sail';

const store = usePresetsStore();

const isActiveHeader = computed(() => scrollY.value > window?.innerHeight / 2);

const themes = computed(() => store?.themes?.data?.map(el => el.theme));
const title = computed(() => store?.methodic?.data?.title);
const count = computed(() => store?.methodic?.data?.pageCount);
const description = computed(() => store?.methodic?.data?.description);
const cost = computed(() => store?.methodic?.data?.price);
const body = computed(() => store?.methodic?.data?.body);

const imSr = ref(null);
const emit = defineEmits(['whited']);
const vLoaded = {
    mounted: e => {
        imSr.value = e.getAttribute('src')
    }
}

const methodicProduct = computed(() => {
    return {
        special: true,
        name: 'Методическое пособие',
        cost: cost.value,
        url: imSr.value,
        id: 'methodic'
    }
})
const btnTitlePerBasketState = computed(() => !isInBasket(methodicProduct.value) ? 'Купить' : 'В корзине');
const methodicData = computed(() => [
    {
        title: 'Что это?',
        description: store?.methodic?.data?.what
    },
    {
        title: 'Сколько информации?',
        description: store?.methodic?.data?.how
    },
    {
        title: 'Кому подойдет?',
        description: store?.methodic?.data?.whom
    }
]);

onBeforeMount(() => {
    emit('whited');
    clear();
})

</script>