<template>
    <div class="w-full h-screen pt-24">
        <NuxtImg class="absolute -left-px bottom-0 h-screen w-overfull z-minus pointer-events-none"
            src="/bg/methodic-bg.png" alt="Методическое пособие" />
        <Container>
            <div class="flex justify-between flex-col relative" v-if="flag">
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
                <ClientOnly>
                    <div class="flex" :style="paddingByHeight">
                        <div class="basis-5/12">
                            <Button class="w-36" white title="Купить" />
                        </div>
                        <div class="basis-7/12 relative">
                            <Superheader :size="[50, 140]" class="absolute bottom-0 text-white -ml-[1%] !mb-[-2%]">With
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