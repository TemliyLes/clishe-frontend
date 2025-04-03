<template>
    <div v-got class="relative">
        <teleport to="body">
            <div v-if="isActive" class="fixed flex no-wrap top-36 gap-12 left-1/3 pointer-events-none"
                :style="transformPerShift">
                <div v-for="(item, index) in imgs" :key="index" class="w-[500px] aspect-square relative">
                    instanse {{ instanse }}
                    <img class="object-cover w-full h-full" :src="item" />
                </div>
            </div>
        </teleport>
        <div class="relative bg-red-500 opacity-40 overflow-auto" :style="calculatedHeight">

        </div>
    </div>
</template>

<script setup>
import { currentSlideElement } from '~/helpers/scroll';


const imgs = [
    'https://storage-api.petstory.ru/resize/800x800x80/d5/f8/9e/d5f89ea2aafa414da17a7b587ae045fa.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CdpkKBPaAimx8ekmiHi-bMXgGoulTzT8dw7vsudWQOnxduSzpgRZY9ebKf81A87uFDtdo2aBCEbY63yliy9hglqmisbXs-14GfejFg',
    'https://s.ura.news/images/news/figures/801/758/801d4253-2321-4490-9618-266869eb1e59/uhl9zx/M-760.1.5.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMy_VabS2uzVbP6w6NSuWCz3HguAHO58XLfSYvKY9PwTlnEPcDCAjoAepYRydV7WUyleQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnpFoP7ooSg_tHV3P6sru8yOi0Yl9N7OOmE2iesRzb0pb8ZhhjAGWLTm5mMTxTl7k0Es&usqp=CAU',
    'https://storage-api.petstory.ru/resize/800x800x80/d5/f8/9e/d5f89ea2aafa414da17a7b587ae045fa.jpeg'
];

const instanse = ref();

const shift = ref(0);
const transformPerShift = computed(() => `transform: translateX(-${shift.value}px)`)

const vGot = {
    mounted: e => instanse.value = e.parentElement.parentElement
}
const onScrollEvent = e => {
    shift.value = e.target.scrollTop
}

const isActive = computed(() => instanse.value === currentSlideElement.value)

const heightCoof = 540;
const calculatedHeight = computed(() => `height: ${imgs.length * heightCoof}px`)

onMounted(() => {
    instanse.value.addEventListener('scroll', onScrollEvent);

})
</script>