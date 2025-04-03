<template>
    <div class="overflow-hidden">
        <Screen full white>
            <MethScreen />
        </Screen>
        <Screen scroll blured>
            <div class="pt-12 pb-24">
                <Header>
                    Хочется назвать его маленьким подручным в мире эстетики мобильной фотографии, но это описание такое
                    скромное, что аж грустно. На деле методичка — это кладезь теории.
                </Header>
                <div class="flex my-12">
                    <div class="basis-1/4 pr-4">
                        <img class="sticky top-5" src="/public/alinacliche.png" />
                    </div>
                    <div class="basis-3/4">
                        <SimpleText big>
                            Представьте себе год работы и 200 страниц именно моих знаний — масштабно, правда?
                        </SimpleText>
                        <SimpleText class="!my-4">
                            Она действительно зародилась больше года назад. В марте 2023-го — в день, когда я взялась
                            за обучение своей первой ученицы. И потому данный труд не может называться скромно: каждая
                            страничка — частичка меня и моей любви к фото.
                        </SimpleText>
                        <SimpleText>
                            И знаете… так приятно осознавать, что с ней соприкоснулось такое количество людей. with
                            love. by heart. for you.
                        </SimpleText>
                        <div>
                            <div v-for="(item, index) in methodicData" :key="index">
                                <Title class="!mb-3">{{ item.title }}</Title>
                                <SimpleText>{{ item.description }}</SimpleText>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex pt-12">
                    <div class="basis-1/4">
                        <Title class="!mt-0 sticky top-5">Темы</Title>
                    </div>
                    <div class="basis-3/4">
                        <div class="flex gap-12" v-for="(theme, themeIndex) in themes" :key="themeIndex">
                            <SimpleText class="w-4 mb-6">{{ themeIndex + 1 }}</SimpleText>
                            <SimpleText>{{ theme }}</SimpleText>
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

import MethScreen from '~/components/blocks/MethScreen.vue';
import { clear } from '~/helpers/scroll';

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

const themes = ['Основы мобильной съемки', 'Сэлфи', 'Композиция', 'Ракурсы', 'Свет', 'Тьма', 'Фото себя на унитазе', 'Узи почек', 'Основы промышленного шпионажа', 'Визуальная концепция', 'Аудиальная контрацепция', 'Перцептивная апперцепция']

onBeforeMount(() => {
    clear()
})

</script>