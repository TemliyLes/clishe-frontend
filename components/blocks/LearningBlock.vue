<template>
    <div class="w-full h-screen pt-24">
        <NuxtImg class="absolute left-0 bottom-0 h-screen w-overfull z-minus object-cover pointer-events-none"
            src="/bg/learn-bg.jpg" alt="Обучение" />
        <Container>
            <div class="flex justify-between flex-col relative h-methodics" v-if="flag">
                <div class="sm:flex">
                    <div class="basis-5/12">
                        <SimpleText :size="[16, 30]" class="text-white">обучение</SimpleText>
                    </div>
                    <div class="basis-7/12 text-right sm:text-left">
                        <SimpleText class="text-white">
                            — mobile photography<br />
                            is an art that can be learned
                        </SimpleText>
                        <div>
                            <SimpleText class="text-white mt-6">
                                {{ count }} лекций в записи<br />
                                доступ {{ access }}
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
                                Take pictures<br />
                                with your eyes
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
    access: {
        type: String,
        default: ''
    },
    btnTitle: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['buy']);
onMounted(() => {
    addEventListener('resize', () => {
        flag.value = false;
        requestAnimationFrame(() => {
            flag.value = true;
        })
    })
});

</script>