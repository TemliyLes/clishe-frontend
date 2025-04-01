<template>
    <div v-if="!locked">
        <div v-init @scroll="onScroll" class="fixed top-0 left-0 w-full h-screen z-90 opacity-0 overflow-scroll">
            <div class="w-36 h-[3500px]"></div>
        </div>
    </div>
</template>

<script setup>
import { locked } from '~/helpers/scroll';

const vInit = {
    mounted: e => {
        e.scrollTop = 2000;
    }
}

const onScroll = (e) => {
    requestAnimationFrame(() => {
        e.target.scrollTop = 2000;
    })
}

</script>