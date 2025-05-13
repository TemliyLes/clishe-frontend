<template>
    <div class="mt-6 -mb-4 flex gap-3 flex-wrap">
        <Tag @navigate="navigate" v-for="(tag, index) in tags" :key="index" :data="{ name: tag.name, id: tag.id }" />
    </div>
</template>

<script setup>
import Tag from './Tag.vue';
defineProps({
    tags: {
        type: Array,
        default: () => []
    }
});


const emit = defineEmits(['navigate']);

const navigate = id => emit('navigate', id);
</script>