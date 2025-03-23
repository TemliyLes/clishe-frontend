import { ref, computed } from 'vue';

// const contentWidth = ref(0);

const screenWidth = ref(0);
const screenHeight = ref(0);


const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    max: 1920,
}

const isMobile = computed(() => (screenWidth.value < breakpoints.sm));
const isFullDesktop = computed(() => (screenWidth.value > breakpoints.max));
const scalePercent = computed(() => {
    const rawPercent = (screenWidth.value - breakpoints.sm) / (breakpoints.max - breakpoints.sm);
    let result;
    if (rawPercent < 0) {
        result = 0;
    } else if (rawPercent > 1) {
        result = 1;
    } else {
        result = rawPercent;
    }
    return result;
});

const onResize = (e) => {
    screenWidth.value = window?.innerWidth;
    screenHeight.value = window?.innerHeight;
};


export function init() {
    window?.addEventListener('resize', onResize);
    onResize();
}


export { screenWidth, breakpoints, isMobile, isFullDesktop, scalePercent }
