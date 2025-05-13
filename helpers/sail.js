import { ref, watch } from 'vue';

const isOpenedBasket = ref(false);
const products = ref([]);

const openBasket = () => {
    isOpenedBasket.value = true;
}
const closeBasket = () => {
    isOpenedBasket.value = false;
}

const addToBasket = (product) => {
    if (!isInBasket(product)) {
        products.value.push(product);
        openBasket();
    }
}

const removeFromBasket = (product) => {
    const targetElem = products.value.indexOf(product);
    products.value.splice(targetElem, 1);
}

const isInBasket = (product) => !!products.value.find((el) => el.id === product.id);

const storageContoll = () => {
    const storage = JSON.parse(localStorage.getItem('products'));
    if (storage) {
        products.value = storage;
    }
}

const clearAllBasket = () => {
    localStorage.removeItem('products');
}

watch(() => products.value,
    val => {
        localStorage.setItem('products', JSON.stringify(val));
    },
    { deep: true })

export { isOpenedBasket, products, openBasket, closeBasket, addToBasket, removeFromBasket, isInBasket, storageContoll, clearAllBasket }