<template>
    <div class="fixed top-0 h-bar z-50 w-full topmenu bg-white">
        <Teleport to="#teleports">
            <div class="fixed w-full h-screen bg-main top-0 left-0 z-menu pt-24 mobile-menu transition duration-700 ease"
                :class="active ? 'translate-x-0' : '-translate-x-full'">
                <CloseButton class="absolute right-6 top-4" @click="deactivate"></CloseButton>
                <Container>
                    <p v-for="nav in navs" :key="nav.title">
                        <NuxtLink class="text-white text-[34px]" :to="nav.to">
                            {{ nav.title }}
                        </NuxtLink>
                    </p>
                </Container>
            </div>
        </Teleport>
        <Container class="z-30">
            <div class="flex justify-between w-full pt-4">
                <NuxtLink to="/">
                    <Logo class="h-6 -ml-12" :white="whitePower" />
                </NuxtLink>
                <div class="transition-all transition duration-700 flex"
                    :class="whitePower ? 'text-white' : 'text-main'">
                    <Burger @click="activate" />
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup>
import Container from '../basic/Container.vue';
import Logo from '~/assets/icons/Logo.vue';
import Burger from './Burger.vue';
import CloseButton from '~/assets/icons/CloseButton.vue';
defineProps({
    navs: {
        type: Array,
        default: () => []
    }
});


const active = ref(false);

const activate = () => active.value = true;
const deactivate = () => active.value = false;
</script>