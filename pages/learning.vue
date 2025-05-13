<template>
    <div>
        <Screen full white bg="none">
            <LearningBlock :btn-title="btnTitlePerBasketState" @buy="addToBasket(basketItem)" :access="access"
                :count="count" />
        </Screen>
        <Screen scroll blured>
            <div class="py-6 sm:pb-12">
                <Title>Что это?</Title>
                <Header restructed :static="isMobile" :static-active="isActiveHeader" v-if="title">
                    {{ title }}
                </Header>
                <div class="sm:flex sm:my-12 gap-6">
                    <div class="basis-1/4 pr-4">

                        <img v-loaded class="sticky w-full sm:top-5 my-9 sm:my-0 aspect-educ md:h-auto"
                            src="/public/learn.jpg" />
                    </div>
                    <div class="basis-3/4">
                        <div v-for="(infoblock, infoIndex) in learningInfo" :key="infoblock.number">
                            <div v-if="infoIndex" class="h-px bg-light w-full mb-7"></div>
                            <div class="md:flex gap-6">
                                <div class="text-[77px] text-main basis-[57px] shrink-0 mt-0 md:-mt-6">
                                    {{ infoblock.number }}.</div>
                                <div class="basis-1/3 shrink-0">
                                    <SimpleText class="font-medium !text-[16px] !md:text-[18px]">{{ infoblock.title }}
                                    </SimpleText>
                                    <Tag class="my-4" @navigate="navigateToLections" :data="tagData"
                                        v-if="infoblock.number === 1"></Tag>
                                </div>
                                <div>
                                    <SimpleText v-for="(p, pIndex) in infoblock.description" :key="pIndex" class="pb-4">
                                        <span :class="subp.bold ? 'font-bold' : 'font-normal'"
                                            class="monster !text-[14px] !md:text-[16px]"
                                            v-for="(subp, subpIndex) in p?.children" :key="subpIndex">
                                            {{ subp?.text }}
                                        </span>
                                    </SimpleText>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    class="w-full mt-9 sm:mt-0 sm:h-screen h-96 absolute overflow-hidden -ml-container sm:-ml-container-d pt-screen">
                    <img class="object-cover h-full w-full" :src="imgURL(mediumBG)" />
                </div>
                <div class="h-96 sm:h-screen"></div>
                <div class="sm:flex sm:pt-12 pt-16 gap-6" v-if="lections">
                    <div class="basis-1/4">
                        <Title class="!mt-0 sticky top-5">Лекции</Title>
                    </div>
                    <div class="basis-3/4" ref="lectionsRef">
                        <Faq :content="lections" />
                    </div>
                </div>

                <div class="pt-9 sm:pt-12">
                    <div v-for="(f, fIndex) in fields" :key="fIndex" class="sm:flex gap-6 ">
                        <div class="basis-1/4 shrink-0">
                            <SimpleText :class="fieldClass">
                                {{ f }}
                            </SimpleText>
                        </div>
                        <div class="basis-3/4">
                            <SimpleText :class="fieldClass">
                                {{ values[fIndex] }}
                            </SimpleText>
                        </div>
                    </div>
                </div>
                <Button class="md:w-[140px] my-3 sm:my-12" @click="addToBasket(basketItem)"
                    :title="btnTitlePerBasketState" />
            </div>
        </Screen>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Screen from '~/components/basic/Screen.vue';
import LearningBlock from '~/components/blocks/LearningBlock.vue';
import Footer from '~/components/footer/Footer.vue';
import { clear, scrollToElement } from '~/helpers/scroll';
import Header from '~/components/text/Header.vue';
import Title from '~/components/text/Title.vue';
import Faq from '~/components/presets/Faq.vue';
import Tag from '~/components/tags/Tag.vue';

import { usePresetsStore } from '~/stores/store';
import { isMobile } from '~/helpers/break';
import { addToBasket, isInBasket } from '~/helpers/sail';
import { imgURL } from '~/helpers/api';
import SimpleText from '~/components/text/SimpleText.vue';
import Button from '~/components/basic/Button.vue';

const store = usePresetsStore();
const scrollY = ref();
const isActiveHeader = computed(() => scrollY.value > window?.innerHeight / 2);
const imSr = ref(null);

const vLoaded = {
    mounted: e => {
        imSr.value = e.getAttribute('src')
    }
}

const lections = computed(() => store?.lections?.data);

const title = computed(() => store?.learning?.data?.title);
const access = computed(() => store?.learning?.data?.access);
const count = computed(() => store?.learning?.data?.count_lections);
const mediumBG = computed(() => store?.learning?.data?.bg?.url);


const duration = computed(() => store?.learning?.data?.duration);
const materials = computed(() => store?.learning?.data?.materials);
const format = computed(() => store?.learning?.data?.format);
const cost = computed(() => store?.learning?.data?.cost);
const costWithCurrency = computed(() => cost.value + ' ₽');

const fields = ['Количество лекций', 'Продолжительность записей', 'Дополнительный материал', 'Формат', 'Доступ', 'Стоимость']
const values = [count, duration, materials, format, access, costWithCurrency];
const fieldClass = 'mt-1.5 !text-[16px] !md:text-[18px]';

const learningInfo = computed(() => store?.learning_info?.data?.sort((a, b) => a.number - b.number));

const tagData = {
    name: 'Список лекций',
    id: 'lections'
};

const lectionsRef = ref();
const navigateToLections = () => {
    scrollToElement(lectionsRef.value, 540)
}

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
onBeforeMount(() => {
    clear();
})

</script>