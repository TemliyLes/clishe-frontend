<template>
    <div>
        <Title class="!mt-0 mb-6">0{{ index }} {{ data.name }}</Title>
        <SimpleText big>{{ data.description }}</SimpleText>
    </div>
</template>

<script setup>
import Title from '../text/Title.vue';
import SimpleText from '../text/SimpleText.vue';

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
</script>