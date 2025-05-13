<template>
    <div @click="navigateTo(data.id)"
        class="md:text-[16px] text-[14px] h-[37px] cursor-pointer font-medium inline-block lowercase rounded-3xl text-main monster px-4 sm:px-5 whitespace-nowrap grid place-items-center border border-1 border-grey">
        {{ data.name }}
    </div>
</template>
<script setup>

defineProps({
    data: {
        type: Object,
        default: () => { }
    }
});

const emit = defineEmits(['navigate']);

const navigateTo = id => emit('navigate', id);
</script>