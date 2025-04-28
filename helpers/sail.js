import { ref } from 'vue';

const isOpenedBasket = ref(false);
const products = ref([]);

const openBasket = () => {
    isOpenedBasket.value = true;
}
const closeBasket = () => {
    isOpenedBasket.value = false;
}

const addToBasket = (product) => {

    if (!products.value.includes(product)) {
        products.value.push(product);
        openBasket();
    }
}
export { isOpenedBasket, products, openBasket, closeBasket, addToBasket }