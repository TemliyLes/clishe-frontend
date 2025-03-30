<template>
    <div class="my-16">
        <SimpleText big class="mb-6">{{ title }}</SimpleText>
        <SimpleText>{{ description }}</SimpleText>
        <div class="relative my-12">
            <div v-for="(preset, index) in presets" :key="index" class="transition duration-700"
                :class="[index ? 'absolute top-0 inset-0' : 'relative', testActive(index) ? 'opacity-100 z-40' : 'opacity-0 z-20']">
                <Preset :data="preset" :index="index + 1"></Preset>
            </div>
            <div class="absolute -top-1.5 right-0 flex gap-4 z-40">
                <div @click="changePreset(true)" class="cursor-pointer">
                    <SliderArrow />
                </div>
                <div @click="changePreset(false)" class="cursor-pointer rotate-180">
                    <SliderArrow />
                </div>
            </div>
        </div>
        <SimpleText>Количество цветов: {{ colorCount }}</SimpleText>
        <SimpleText>Стоимость: {{ cost }}</SimpleText>

        <div class="flex gap-4 my-12">
            <Button title="Купить"></Button>
            <Button white></Button>
        </div>
    </div>
</template>

<script setup>
import Preset from './Preset.vue';
import SliderArrow from '~/assets/icons/SliderArrow.vue';
import SimpleText from '../text/SimpleText.vue';
import Button from '../basic/Button.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Classic color collection',
    },
    description: {
        type: String,
        default: 'Зимняя коллекция цветов, которая собрала в себе и уют, и спокойствие, и ощущение приближающейся праздничной ночи. тем не менее, каждый из цветов прекрасно впишется в ваш привычный контент и добавит ему нотку киношности.Так просто, но так чарующе. Познакомимся с ними поближе?',
    },
    colorCount: {
        type: Number,
        default: 5,
    },
    cost: {
        type: Number,
        default: 1499,
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
                        original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
                        edited: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg/1200px-Anser_anser_2_%28Piotr_Kuczynski%29.jpg',
                    },
                ]
            },
            {
                title: 'Preffle',
                description: 'Перед вами Preffle , бывают пресеты и получше, но этот пресет всем пресетам пресет. Присядь, иначе рухнешь.',
                slides: [
                    {
                        original: 'https://stihi.ru/pics/2020/11/13/9150.jpg',
                        edited: 'https://stihi.ru/pics/2020/11/13/9150.jpg',
                    },
                    {
                        original: 'https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg',
                        edited: 'https://ic.pics.livejournal.com/shadberry_game/69190420/203256/203256_900.jpg',
                    },
                    {
                        original: 'https://ic.pics.livejournal.com/annataliya/9442011/18981/18981_800.jpg',
                        edited: 'https://ic.pics.livejournal.com/annataliya/9442011/18981/18981_800.jpg',
                    },
                ]
            },
            {
                title: 'Huyaffle',
                description: 'Перед вами Huyaffle - самый лаконичный, нежный и естественный Huyaffle из все Хуяфлов, шо ты мог себе помыслить',
                slides: [
                    {
                        original: 'https://gavrishprof.ru/sites/default/files/images/pub/gavrishprof_belokachannaya_kapusta_ot_posadki_do_uborki_rassada.jpg',
                        edited: 'https://gavrishprof.ru/sites/default/files/images/pub/gavrishprof_belokachannaya_kapusta_ot_posadki_do_uborki_rassada.jpg',
                    },
                    {
                        original: 'https://uraeshka.ru/upload/resize_cache/webp/iblock/eb4/4vl3vvuidg2vo7owdx23gbzi48d0i0ja.webp',
                        edited: 'https://uraeshka.ru/upload/resize_cache/webp/iblock/eb4/4vl3vvuidg2vo7owdx23gbzi48d0i0ja.webp',
                    },
                    {
                        original: 'https://izagri.ru/wp-content/uploads/2021/09/kapusta-13.jpg',
                        edited: 'https://izagri.ru/wp-content/uploads/2021/09/kapusta-13.jpg',
                    },
                ]
            },
        ]
    },
});

const activeIndex = ref(0);

const testActive = (index) => index === activeIndex.value;
const changePreset = (bool) => {
    if (!bool) {
        activeIndex.value++;
    } else {
        activeIndex.value--;
    }
    if (activeIndex.value > props.presets.length - 1) {
        activeIndex.value = 0;
    }
    if (activeIndex.value < 0) {
        activeIndex.value = props.presets.length - 1;
    }
}

</script>