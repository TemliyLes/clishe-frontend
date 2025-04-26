<template>
    <div @click="navigateTo(data.id)"
        class="text-[16px] cursor-pointer inline-block rounded-3xl text-main monster px-4 sm:px-5 whitespace-nowrap py-2 border border-1 border-main">
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