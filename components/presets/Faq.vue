<template>
    <div>
        <div class="cursor-pointer" v-for="(item, index) in faq" :key="index" @click="setActive(index)">
            <div class="flex justify-between">
                <SimpleText big>{{ item.question }}</SimpleText>
                <Cross :opened="testActive(index)" />
            </div>

            <Collapsed :active="testActive(index)">
                <SimpleText class="!my-4">{{ item.answer }}</SimpleText>
            </Collapsed>
            <div class="my-6 h-px w-full bg-light will-change-transform"></div>
        </div>
    </div>
</template>

<script setup>
import SimpleText from '../text/SimpleText.vue';
import Cross from '../ui/Cross.vue';
import Collapsed from '../ui/Collapsed.vue';

const currentIndex = ref(0);
const setActive = (index) => currentIndex.value = index;
const testActive = (index) => currentIndex.value === index;

const faq = [
    {
        question: 'Можно ли приобрести цвета по отдельности?',
        answer: 'Приобрести по отдельности нельзя — они задумывались как целое, состоящее из частей. На то это и коллекция.'
    },
    {
        question: 'Можно ли чихнуть во время кувырка?',
        answer: 'Ходят слухи, что выполнив это, можно стать бессмертным.'
    },
    {
        question: 'Можно выйти',
        answer: 'Только в окно'
    },
    {
        question: 'Можно ли мочить манту?',
        answer: 'Можно мочить только террористов в сортире.'
    },
    {
        question: 'Можно немного лорема?',
        answer: 'Да изи: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, corporis ea velit doloribus quam eligendi accusantium eos adipisci cumque soluta dolorum deserunt, sapiente repellendus voluptatibus atque vero. Corrupti, fugit. Animi vero ipsam natus aperiam omnis quos, maxime aliquid commodi delectus!  '
    },
    {
        question: 'Каким маслом лучше прокаливать сковороду?',
        answer: 'Прокаливать лучше в духовке при температуре 175–200 градусов, но можно и на обычной плите. 3. Смажьте сковороду (подойдет растительное масло). Лучше использовать сорта масел, которые хорошо сохнут, например, льняное.'
    }
]
</script>
