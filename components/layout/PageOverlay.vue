<template>
    <div :class="elementClasses" class="fixed z-pager bg-beige top-0 left-0 w-full h-screen transition duration-500">
    </div>
</template>

<script setup>
import { useNuxtApp } from '#app';

const ANIMATION_STEP_DURATION = 700;

const elementClasses = ref('origin-left scale-x-0')

const app = useNuxtApp();
const router = useRouter();

router.beforeEach((from, to, next) => {
    requestAnimationFrame(() => {
        elementClasses.value = 'origin-left scale-x-1';
        setTimeout(() => {
            next();
            app.vueApp._container.scrollTop = 0;
            setTimeout(() => {
                elementClasses.value = 'origin-right scale-x-0';
            }, ANIMATION_STEP_DURATION)
        }, ANIMATION_STEP_DURATION * 2);
    });

})

</script>