<template>
    <div class="fixed top-0 h-bar z-bar w-full topmenu transition duration-700" :style="{ 'background-color': ms }">
        <Teleport to="#teleports">
            <div class="fixed w-full h-screen bg-main top-0 left-0 z-menu pt-24 mobile-menu transition duration-500 ease"
                :class="active ? 'translate-x-0' : '-translate-x-full'">
                <CloseButton class="absolute right-6 top-4" @click="deactivate(false)"></CloseButton>
                <Container>
                    <p v-for="nav in navs" :key="nav.title">
                        <NuxtLink class="text-white text-[34px]" :to="nav.to" @click="deactivate(true)">
                            {{ nav.title }}
                        </NuxtLink>
                    </p>
                </Container>
            </div>
        </Teleport>
        <Container class="z-30">
            <div class="flex justify-between w-full pt-4">
                <NuxtLink to="/home">
                    <Logo class="h-6 -ml-12" :white="whitePower" />
                </NuxtLink>
                <div class="transition-all transition duration-700 flex">
                    <Burger :bg="whitePower ? '#fff' : 'rgb(59 57 56)'" @click="activate" />
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-full backdrop-blur-sm transition z-minus transition transition-opacity"
                :class="blurPower ? 'opacity-1' : 'opacity-0'">
                <div class="absolute opacity-40 top-0 left-0 w-full h-full transition-all transition duration-700"
                    :class="whitePower ? 'bg-grey' : 'bg-white'">
                </div>
            </div>
            <div class="absolute bottom-0 left-0 h-px w-full transition-all transition duration-700"
                :class="whitePower ? 'bg-white' : 'bg-grey'">
            </div>
        </Container>
    </div>
</template>

<script setup>
import Container from '../basic/Container.vue';
import Logo from '~/assets/icons/Logo.vue';
import Burger from './Burger.vue';
import CloseButton from '~/assets/icons/CloseButton.vue';
const props = defineProps({
    navs: {
        type: Array,
        default: () => []
    },
    mb: {
        type: String,
        default: '',
    },
    mw: {
        type: String,
        default: '',
    },
    ms: {
        type: String,
        default: '',
    },
});


const active = ref(false);

const whitePower = computed(() => props.mw === 'true');
const blurPower = computed(() => props.mb === 'true');

const activate = () => active.value = true;
const deactivate = (delay) => {
    const delayVal = delay ? 1400 : 0;
    setTimeout(() => {
        active.value = false;
    }, delayVal)
};


</script>