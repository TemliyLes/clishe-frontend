<template>
    <div class="w-full h-screen pt-24 relative">
        <div inert class="absolute top-0 left-0 w-full h-[50vh]" :style="{ background: bgGradient }"></div>
        <NuxtImg class="absolute left-0 bottom-0 h-screen w-overfull z-minus pointer-events-none"
            src="/bg/methodic-bg.jpg" alt="Методическое пособие" />
        <Container>
            <div class="flex justify-between flex-col relative h-methodics" v-if="flag">
                <div class="sm:flex">
                    <div class="basis-5/12">
                        <SimpleText :size="[16, 30]" class="text-white">методическое<br />пособие</SimpleText>
                    </div>
                    <div class="basis-5/12 text-right sm:text-left">
                        <SimpleText class="text-white font-medium text-right !text-[18px] md:w-[256px]">
                            — mobile photography<br />
                            is an art that can be learned
                        </SimpleText>
                        <div>
                            <SimpleText class="text-white mt-6 !text-[18px]">
                                {{ count }} страниц чистой пользы<br />
                                PDF файл в tg-канале
                            </SimpleText>
                        </div>
                    </div>
                </div>
                <ClientOnly>
                    <div class="flex flex-col-reverse sm:flex-row -mt-12 sm:!mt-0">
                        <div class="basis-5/12">
                            <Button @click="emit('buy')" class="w-36 my-6 sm:my-0" white :title="btnTitle" />
                        </div>
                        <div class="basis-7/12 relative">
                            <Superheader :size="[50, 140]"
                                class="sm:absolute bottom-0 text-white sm:-ml-[1%] !mb-[-2%]">
                                With
                                love. By
                                heart.<br />For you.
                            </Superheader>
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </Container>
    </div>
</template>

<script setup>
import Button from '../basic/Button.vue';
import SimpleText from '../text/SimpleText.vue';
import Container from '../basic/Container.vue';
import Superheader from '../text/Superheader.vue';
const flag = ref(true);
defineProps({
    count: {
        type: Number,
        default: 0
    },
    btnTitle: {
        type: String,
        default: ''
    }
});

const bgGradient = 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 47.76%)';

onMounted(() => {
    addEventListener('resize', () => {
        flag.value = false;
        requestAnimationFrame(() => {
            flag.value = true;
        })
    })
});
const emit = defineEmits('buy');
</script>