<template>
    <div>
        <Title>Products</Title>
        <div class="flex sm:flex-row justify-between flex-col-reverse">
            <div class="sm:flex basis-1/4 bg-grey">
                <img class="aspect-method object-cover w-full" src="/public/alinacliche.png" alt="method" />
            </div>
            <div class="basis-2/3">
                <Header class="sm:!mb-16 mb-4 sm:-ml-1">Методическое пособие</Header>
                <div class="sm:flex justify-between">
                    <div class="basis-[56.25%]">
                        <div v-for="(p, index) in paragraphs" :key="index">
                            <SimpleText class="leading-method-big" :style="fontSize(16, 18)">{{ p }}</SimpleText>
                        </div>
                    </div>
                    <div class="basis-[37.5%] mt-1">
                        <SimpleText class="leading-method" :style="fontSize(14, 16)">{{ another }}</SimpleText>
                    </div>
                </div>
                <NuxtLink to="/methodic"><Button class="my-7 sm:mt-16 w-[157px]" /></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../text/Title.vue';
import Header from '../text/Header.vue';
import SimpleText from '../text/SimpleText.vue';
import Button from '../basic/Button.vue';

import { fontSize } from '~/helpers/freeze';

const paragraphs = [
    'Хочется назвать его маленьким подручным в мире эстетики мобильной фотографии, но это описание такое скромное, что аж грустно.',
    'На деле методичка — это кладезь теории. Представьте себе год работы и 200 страниц именно моих знаний — масштабно, правда?',
];
const another = 'Она действительно зародилась больше года назад. В марте 2023-го — в день, когда я взялась за обучение своей первой ученицы. И потому данный труд не может называться скромно: каждая страничка — частичка меня и моей любви к фото.';

</script>