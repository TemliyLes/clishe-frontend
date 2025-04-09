<template>
    <div>
        <Screen blured scroll>
            <Superheader class="sm:!mt-16 !mt-24">{{ name }}</Superheader>
            <Header class="!mt-12">
                Коллекция цветов на все времена и сезоны — вечная классика в непостоянном мире
                творчества.В нее
                вошли самые лаконичные цветовые решения. Давайте пару слов о каждом.
            </Header>
            <PresetCollection />
            <div
                class="w-full mt-9 sm:mt-0   sm:h-screen h-96 absolute overflow-hidden -ml-container sm:-ml-container-d pt-screen">
                <img class="object-cover h-full"
                    src="https://media.istockphoto.com/id/473046084/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%B5%D1%82%D1%82%D0%BE-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B.jpg?s=2048x2048&w=is&k=20&c=a1zcNz4erQhX_8A2Y2HzTY6JDfSqtgAT5c4AGwXFy7o=" />
            </div>
            <div class="h-96 sm:h-screen"></div>
            <div class="pt-16 sm:min-h-[650px] sm:pb-72">
                <div class="sm:flex gap-4">
                    <div class="basis-1/3">
                        <Title class="!mt-1">часто задаваемые вопросы</Title>
                    </div>
                    <div class="basis-3/4">
                        <Faq />
                    </div>
                </div>
            </div>
        </Screen>
        <Footer />
    </div>
</template>

<script setup>
import Screen from '~/components/basic/Screen.vue';
import Superheader from '~/components/text/Superheader.vue';
import Header from '~/components/text/Header.vue';
import PresetCollection from '~/components/presets/PresetCollection.vue';
import Title from '~/components/text/Title.vue';
import Faq from '~/components/presets/Faq.vue';
import Footer from '~/components/footer/Footer.vue';

const route = useRoute();
const name = route.params.name;

import { clear } from '~/helpers/scroll';

onBeforeMount(() => {
    clear()
});
</script>