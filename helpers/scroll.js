import { ref, watch } from 'vue';
import { isMobile } from './break';
import { useNuxtApp } from '#app';


const ANIMATION_DELAY = 700;
const DELAY_AFTER_SWAP = 300;

const locked = ref(false);

const currentSlide = ref(0);

const scrollY = ref(0);



const screenList = ref([]);

const mobileScreensList = ref([]);

const pushScreen = (screen) => {
    screenList.value.push(screen);
}

const slideUp = (up) => {
    locked.value = true;
    requestAnimationFrame(() => {
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
        }, ANIMATION_DELAY + DELAY_AFTER_SWAP);
    });

}

watch(() => isMobile.value, () => {
    screenList.value = []
});

const currentSlideElement = computed(() => screenList.value[currentSlide.value]);

const clear = () => {
    screenList.value = [];
    mobileScreensList.value = [];
    currentSlide.value = 0;
}

const scrollToElement = (elem, addshift) => {
    const app = useNuxtApp();
    const scrolledBlock = isMobile.value ? app.vueApp._container : currentSlideElement.value;
    scrolledBlock.style.scrollBehavior = 'smooth';
    const shift = isMobile.value ? -20 : 80;
    const add = addshift ? addshift : 0;
    scrolledBlock.scrollTop = elem?.offsetTop - shift + add;
}

export { ANIMATION_DELAY, currentSlide, slideUp, pushScreen, locked, screenList, currentSlideElement, clear, mobileScreensList, scrollY, scrollToElement }