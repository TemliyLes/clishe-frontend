import { ref, computed } from 'vue';

let iter = -1;

const ANIMATION_DELAY = 700;

const locked = ref(false);

const currentSlide = ref(0);

const screenList = ref([]);

const pushScreen = (screen) => {
    iter++;
    screenList.value.push(screen);
    return iter
}

const slideUp = (up) => {
    console.log(currentSlide.value);
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

export { currentSlide, slideUp, pushScreen, locked }