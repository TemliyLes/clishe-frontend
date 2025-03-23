import { isMobile, isFullDesktop, scalePercent } from '~/helpers/break';

const fontSize = (min, max) => {
    let result;

    if (isMobile.value) {
        result = min;
    };
    if (isFullDesktop.value) {
        result = max;
    };

    if (!isFullDesktop.value && !isMobile.value) {
        result = min + ((max - min) * scalePercent.value);
    };

    return `font-size: ${result}px;`
};

export { fontSize }