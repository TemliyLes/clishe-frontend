<template>
    <div class="w-full h-screen pt-24">
        <NuxtImg class="absolute -left-px bottom-0 h-screen w-overfull z-minus pointer-events-none"
            src="/bg/methodic-bg.png" alt="13213" />
        <Container>
            <div class="flex justify-between flex-col relative bg-red-300" v-if="flag">
                <div class="flex">
                    <div class="basis-5/12">
                        <SimpleText :size="[16, 30]" class="text-white">методическое<br />пособие</SimpleText>
                    </div>
                    <div class="basis-7/12">
                        <SimpleText class="text-white">
                            — mobile photography<br />
                            is an art that can be learned
                        </SimpleText>
                    </div>
                </div>
                <div class="flex" :style="paddingByHeight">
                    <div class="basis-5/12">
                        <SimpleText :size="[16, 30]" class="text-white">методическое<br />пособие</SimpleText>
                    </div>
                    <div class="basis-7/12">
                        <SimpleText class="text-white">
                            — mobile photography<br />
                            is an art that can be learned
                        </SimpleText>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup>

import SimpleText from '../text/SimpleText.vue';
import Container from '../basic/Container.vue';
const flag = ref(true);
const paddingByHeight = computed(() => `padding-top:${window?.innerHeight - 320}px`);

onMounted(() => {
    addEventListener('resize', () => {
        flag.value = false;
        requestAnimationFrame(() => {
            flag.value = true;
        })
    })
});

</script>