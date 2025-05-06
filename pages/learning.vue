<template>
    <div>
        <Screen full blured white bg="none">
            <LearningBlock :access="access" :count="count" />
        </Screen>
        <Screen scroll blured>
            <div class="py-6 sm:pb-12">
                <Title>Что это?</Title>
                <Header restructed :static="isMobile" :static-active="isActiveHeader" v-if="title">
                    {{ title }}
                </Header>
                <div class="sm:flex sm:my-12 gap-6">
                    <div class="basis-1/4 pr-4">
                        <img v-loaded class="sticky w-full sm:top-5 my-9 sm:my-0 h-[388px] md:h-auto"
                            src="/public/learn.jpg" />
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
                <div
                    class="w-full mt-9 sm:mt-0 sm:h-screen h-96 absolute overflow-hidden -ml-container sm:-ml-container-d pt-screen">
                    <img class="object-cover h-full w-full" :src="imgURL(mediumBG)" />
                </div>
                <div class="h-96 sm:h-screen"></div>
                <div class="sm:flex sm:pt-12 pt-16 gap-6" v-if="lections">
                    <div class="basis-1/4">
                        <Title class="!mt-0 sticky top-5">Лекции</Title>
                    </div>
                    <div class="basis-3/4">
                        <Faq :content="lections" />
                    </div>
                </div>

                <div class="sm:flex sm:pt-12 pt-9 gap-6">
                    <div class="basis-1/4">
                        <SimpleText :class="fieldClass" v-for="(f, fIndex) in fields" :key="fIndex">
                            {{ f }}
                        </SimpleText>
                    </div>
                    <div class="basis-3/4">
                        <SimpleText :class="fieldClass" v-for="(t, tIndex) in values" :key="tIndex">
                            {{ t }}
                        </SimpleText>
                    </div>
                </div>
                <Button class="md:w-[120px] my-3 sm:my-12" @click="addToBasket(basketItem)" title="Купить" />
            </div>
        </Screen>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Screen from '~/components/basic/Screen.vue';
import LearningBlock from '~/components/blocks/LearningBlock.vue';
import Footer from '~/components/footer/Footer.vue';
import { clear } from '~/helpers/scroll';
import Header from '~/components/text/Header.vue';
import Title from '~/components/text/Title.vue';
import Faq from '~/components/presets/Faq.vue';

import { usePresetsStore } from '~/stores/store';
import { isMobile } from '~/helpers/break';
import { addToBasket } from '~/helpers/sail';
import { imgURL } from '~/helpers/api';
import SimpleText from '~/components/text/SimpleText.vue';
import Button from '~/components/basic/Button.vue';

const store = usePresetsStore();
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
const fieldClass = 'mt-1.5'

const basketItem = {}

onBeforeMount(() => {
    clear();
})

</script>