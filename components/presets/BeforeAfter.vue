<template>
    <div v-if="flag">
        <Teleport to="body">
            <div v-if="dragMode" class="fixed w-full h-full top-0 left-0 cursor-grabbing" @mouseup="stopDrag"
                @mousemove="onMove"></div>
        </Teleport>
        <div v-declare class="relative aspect-befafter w-full my-8">
            <div ref="shifter" class="h-full w-px z-50 relative cursor-grab" :style="shifterX" @mousedown="startDrag">
                <div class="absolute w-12 h-full top-0 -ml-6"></div>
                <div
                    class="will-change-transform absolute w-px bg-white bottom-0 h-full origin-top transition-transform">
                </div>
                <div
                    class="will-change-transform absolute -translate-x-1/2 -translate-y-1/2 top-1/2 h-7 w-7 border border-white border-solid rounded-full overflow-hidden ease-in-out duration-300 transition-transform">
                    <div class="absolute inset-0 z-10 grid place-items-center">
                        <Ambydexter></Ambydexter>
                    </div>
                    <div class="backdrop-blur-sm absolute inset-0 rounded-full"></div>
                </div>
            </div>
            <div class="absolute h-full top-0 left-0 z-30 overflow-hidden" :style="{ width: `${dragX}px` }">
                <div class="h-full absolute w-full select-none" :style="canvasWidth">
                    <Image class="pointer-events-none object-cover absolute select-none" :style="canvasWidth"
                        :src="data.original" />
                </div>
            </div>
            <Image
                class="absolute w-full h-full absolute top-0 left-0 object-cover pointer-events-none grayscale select-none"
                :src="data.edited" />
        </div>
    </div>
</template>

<script setup>
import Image from '../basic/Image.vue';
import Ambydexter from '~/assets/icons/Ambydexter.vue';

defineProps({
    data: {
        type: Object,
        default: () => { }
    }
});

const flag = ref(true);
const dragMode = ref(false);

const startDrag = () => dragMode.value = true;
const stopDrag = () => dragMode.value = false;

const canvas = ref();
const canvasWidth = computed(() => `width: ${canvas.value?.offsetWidth}px`);
const minX = computed(() => canvas.value?.getBoundingClientRect().left);
const maxX = computed(() => minX.value + canvas.value?.getBoundingClientRect().width);

const dragX = ref(0);

const onMove = (e) => {
    if (dragMode.value) {
        requestAnimationFrame(() => {
            let x;
            x = e.clientX;
            if (x > maxX.value) {
                x = maxX.value;
            }
            if (x < minX.value) {
                x = minX.value;
            }
            dragX.value = x - minX.value;
        });
    }
};

const shifterX = computed(() => `transform: translateX(${dragX.value}px)`);

const vDeclare = {
    mounted: e => {
        canvas.value = e;
        requestAnimationFrame(() => {
            dragX.value = e.offsetWidth / 2;
        });
    }
};

onMounted(() => {
    addEventListener('resize', () => {
        flag.value = false;
        requestAnimationFrame(() => {
            flag.value = true;
        })
    })
})

</script>