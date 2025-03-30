<template>
    <div class="sm:flex justify-between">
        <div class="basis-5/12 relative">
            <div class="absolute inset-0 transition duration-700" v-for="(double, dIndex) in data.slides" :key="dIndex"
                :class="[dIndex ? 'absolute inset-0' : 'relative', testActive(dIndex) ? 'opacity-100' : 'opacity-0']">
                <BeforeAfter :data="double" />
            </div>
        </div>
        <div class="basis-1/2 flex flex-col justify-between ">
            <div>
                <Title class="!mt-0">0{{ index }} {{ data.title }}</Title>
                <SimpleText big>{{ data.description }}</SimpleText>
            </div>
            <div>
                <div class="flex gap-6">
                    <div v-for="(img, index) in data.slides" :key="index" class="basis-1/3 cursor-pointer relative">
                        <div @click="setActive(index)" class="absolute inset-0 bg-white transition"
                            :class="testActive(index) ? 'opacity-40' : 'opacity-0'">
                        </div>
                        <Image class="aspect-square object-cover" :src="img.original" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BeforeAfter from './BeforeAfter.vue';
import Title from '../text/Title.vue';
import SimpleText from '../text/SimpleText.vue';
import Image from '../basic/Image.vue';

defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    index: {
        type: Number,
        default: 0,
    }
});

const activeIndex = ref(0);

const testActive = (index) => index === activeIndex.value;
const setActive = (index) => activeIndex.value = index;

</script>
