<template>
    <div v-if="flag" class="fixed z-[99989] top-0 left-0 w-full h-dvh bg-beige grid place-items-center">
        <Header @click="close">Сайт сломался, увы (</Header>
        <SimpleText class="text-center">Однако наши специалистовые яростно чинят его с двух ног</SimpleText>
        <img class="w-1/2"
            src="https://cdn.fishki.net/upload/post/2024/03/22/4607362/bc882ccb827a10dcd1529ce1f689f35a.jpg" alt="">
    </div>
</template>

<script setup>
import Header from './text/Header.vue';
import SimpleText from './text/SimpleText.vue';
const flag = ref(true)
const close = () => {
    flag.value = false;
}
</script>