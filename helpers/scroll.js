import { ref, watch } from 'vue';
import { isMobile } from './break';

const ANIMATION_DELAY = 700;

const locked = ref(false);

const currentSlide = ref(0);

const screenList = ref([]);

const pushScreen = (screen) => {
    screenList.value.push(screen);
}

const slideUp = (up) => {
    locked.value = true;
    if (up) {
        if (currentSlide.value) {
            currentSlide.value--
        }

    } else {
        if (currentSlide.value < screenList.value.length - 1) {
            currentSlide.value++;
        }
    }
    setTimeout(() => {
        locked.value = false;
    }, ANIMATION_DELAY)
}

watch(() => isMobile.value, () => {
    screenList.value = []
})

export { ANIMATION_DELAY, currentSlide, slideUp, pushScreen, locked, screenList }