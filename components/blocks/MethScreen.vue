<template>
    <div class="w-full h-screen pt-24">
        <NuxtImg class="absolute -left-px bottom-0 h-screen w-overfull z-minus pointer-events-none"
            src="/bg/methodic-bg.png" alt="Методическое пособие" />
        <Container>
            <div class="flex justify-between flex-col relative" v-if="flag" :style="heightByScreenHeight">
                <div class="sm:flex">
                    <div class="basis-5/12">
                        <SimpleText :size="[16, 30]" class="text-white">методическое<br />пособие</SimpleText>
                    </div>
                    <div class="basis-7/12 text-right sm:text-left">
                        <SimpleText class="text-white">
                            — mobile photography<br />
                            is an art that can be learned
                        </SimpleText>
                        <div>
                            <SimpleText class="text-white mt-6">
                                200 страниц чистой пользы<br />
                                PDF файл в tg-канале
                            </SimpleText>
                        </div>
                    </div>
                </div>
                <ClientOnly>
                    <div class="flex flex-col-reverse sm:flex-row -mt-12 sm:!mt-0">
                        <div class="basis-5/12">
                            <Button class="w-36 my-6 sm:my-0" white title="Купить" />
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
const heightByScreenHeight = computed(() => `height:${window?.innerHeight - 140}px`);

onMounted(() => {
    addEventListener('resize', () => {
        flag.value = false;
        requestAnimationFrame(() => {
            flag.value = true;
        })
    })
});

</script>