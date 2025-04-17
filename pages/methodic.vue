<template>
    <div class="overflow-hidden" v-if="store.methodic">
        <Screen full blured white bg="none">
            <MethScreen :count="count" />
        </Screen>
        <Screen scroll blured>
            <div class="py-12 sm:pb-24">
                <Header restructed>
                    {{ title }}
                </Header>
                <div class="sm:flex sm:my-12 gap-6">
                    <div class="basis-1/4 pr-4">
                        <img class="sticky w-full sm:top-5 my-9 sm:my-0" src="/public/alinacliche.png" />
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
                <div class="sm:flex sm:pt-12 pt-9 gap-6">
                    <div class="basis-1/4">
                        <Title class="!mt-0 sticky top-5">Темы</Title>
                    </div>
                    <div class="basis-3/4">
                        <div class="flex gap-2 sm:gap-12" v-for="(theme, themeIndex) in themes" :key="themeIndex">
                            <SimpleText class="basis-4 shrink-0 mb-6">{{ themeIndex + 1 }}</SimpleText>
                            <SimpleText>{{ theme }}</SimpleText>
                        </div>
                        <div class="flex flex-col gap-6 sm:flex-row sm:justify-left sm:mt-9">
                            <Button title="Купить" class="w-36" />
                            <SimpleText class="sm:mt-1">Стоимость: {{ cost }}</SimpleText>
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
import { clear } from '~/helpers/scroll';

import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();

const methodicData = [
    {
        title: 'Что это?',
        description: 'PDF файл в tg-канале'
    },
    {
        title: 'Сколько информации?',
        description: '200 страниц чистой пользы (и текст, и картинки)'
    },
    {
        title: 'Кому подойдет?',
        description: 'Любому человеку, который хочет получить знания по мобильной фотографии'
    }
];
const cost = 5000;
const themes = store?.themes?.data.map(el => el.theme);
const title = computed(() => store?.methodic?.data?.title);
const count = computed(() => store?.methodic?.data?.pageCount);
const description = computed(() => store?.methodic?.data?.description);

const body = computed(() => store?.methodic?.data?.body);


onBeforeMount(() => {
    clear()
})

</script>