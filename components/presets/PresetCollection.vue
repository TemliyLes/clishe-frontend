<template>
    <div>
        <div>{{ title }}</div>
        <div>{{ description }}</div>

        <div v-for="(preset, index) in presets" :key="index">
            <Preset :data="preset" :index="index + 1"></Preset>
        </div>

    </div>
</template>

<script setup>
import Preset from './Preset.vue';


const props = defineProps({
    title: {
        type: String,
        default: 'Classic color collection',
    },
    description: {
        type: String,
        default: 'Зимняя коллекция цветов, которая собрала в себе и уют, и спокойствие, и ощущение приближающейся праздничной ночи. тем не менее, каждый из цветов прекрасно впишется в ваш привычный контент и добавит ему нотку киношности.Так просто, но так чарующе. Познакомимся с ними поближе?',
    },
    presets: {
        type: Array,
        default: () => [
            {
                title: 'Souffle',
                description: 'Перед вами soufflé — самый лаконичный, нежный и естественный. Наша маленькая любовь на каждый день.',
                slides: [
                    {
                        original: 'https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg',
                        edited: 'https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg',
                    },
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                    },
                    {
                        original: 'https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg',
                        edited: 'https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg',
                    },
                ]
            },
            {
                title: 'Preffle',
                description: 'Перед вами Preffle , бывают пресеты и получше, но этот пресет всем пресетам пресет. Присядь, иначе рухнешь.',
                slides: [
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                    },
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9maPzkNJ2b92RcZHhRsbCAJ9uL1fJl12CRA&s',
                    },
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9maPzkNJ2b92RcZHhRsbCAJ9uL1fJl12CRA&s',
                    },
                ]
            },
            {
                title: 'Huyaffle',
                description: 'Перед вами Huyaffle - самый лаконичный, нежный и естественный Huyaffle из все Хуяфлов, шо ты мог себе помыслить',
                slides: [
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                    },
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9maPzkNJ2b92RcZHhRsbCAJ9uL1fJl12CRA&s',
                    },
                    {
                        original: 'https://cs9.pikabu.ru/post_img/2018/07/27/1/1532645232138489893.jpg',
                        edited: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9maPzkNJ2b92RcZHhRsbCAJ9uL1fJl12CRA&s',
                    },
                ]
            },
        ]
    },
});
</script>