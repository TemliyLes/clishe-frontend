<template>
    <div @click="navigateTo(data.id)" :style="width && !isMobile ? `width:${width}px;` : ''"
        class="md:text-[16px] hover:border-main text-[14px] h-[37px] cursor-pointer font-medium inline-block lowercase rounded-3xl text-main monster px-4 sm:px-5 whitespace-nowrap grid place-items-center border border-1 border-light">
        {{ data.name }}
    </div>
</template>
<script setup>
import { isMobile } from '~/helpers/break';
defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    width: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['navigate']);

const navigateTo = id => emit('navigate', id);
</script>