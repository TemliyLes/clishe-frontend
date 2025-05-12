<template>
    <div class="pb-[170px] overflow-auto h-full pr-5 scroll-smooth">
        <EmailConfirm @pay="pay" @again="recode" @back="back" :email="email" :code="token"
            :active="confirmEmailWindow" />
        <PayStep @close="onClosePayment" :list="finalyList" :total="total" :fullname="fullname" :email="email"
            :phone="phone" :active="stepPayment" />
        <div class="flex justify-between">
            <BasketHeader>Корзина</BasketHeader>
            <Close @click="closeBasket" />
        </div>
        <div>
            <div v-if="products.length">
                <div class="relative mt-6">
                    <BasketSimple class="text-[16px]">Состав заказа</BasketSimple>
                    <div v-for="(product, index) in productsWithSale" :key="product">
                        <MiniProduct :noline="index === products.length - 1" :data="product" />
                    </div>
                </div>
                <div class="bg-yep py-3 pl-2.5 pr-8 mt-4 rounded-xl relative"
                    v-if="alertCanSee && onlyPresets.length === 1">
                    <SimpleText :style="fontSize([16, 16])">
                        при приобретении двух и более коллекций цветов <span class="font-medium monster">скидка - 10
                            %</span>
                    </SimpleText>
                    <NuxtLink to="/presets" @click="closeBasket">
                        <BasketHeader class="mt-3 cursor-pointer">Купить</BasketHeader>
                    </NuxtLink>
                    <MiniClose @click="closeAlert" class="absolute top-4 right-4 cursor-pointer" />
                </div>

                <div class="mt-6">
                    <BasketHeader>Итого {{ total }} ₽</BasketHeader>
                    <div class="flex gap-3 mt-4">
                        <Check class="shrink-0" v-model="present" />
                        <div>
                            <BasketSimple>Купить в подарок</BasketSimple>
                            <BasketSimple class="!text-grey mt-2">вы получите сертификат на оплату выбранных коллекций,
                                который
                                можно отправить другому человеку</BasketSimple>
                        </div>
                    </div>
                </div>
                <div>
                    <BasketSimple class="mt-4 text-[16px]">Контактные данные</BasketSimple>
                    <div ref="inputs">
                        <Input place="Фамилия" v-model="surname" />
                        <Input place="Имя" v-model="name" />
                        <Input place="Отчество" v-model="patronymic" />
                        <Input place="Ваш email" v-model="email" email />
                        <Input place="Контактный телефон" v-model="phone" />
                    </div>
                    <BasketSimple class="mt-1 !text-grey">мы отправим письмо для подтверждения почты</BasketSimple>
                </div>

            </div>
            <div class="mt-4 flex" v-else>
                <BasketSimple class="text-[16px]">Ваша корзина пуста. Для оформления заказа необходимо пополнить
                    корзину.
                </BasketSimple>
            </div>
        </div>
        <div class="absolute bottom-0 h-[170px] left-0 bg-white w-full p-4 md:p-10" v-if="products.length">
            <!-- <div @click="getFinal()">FINAL</div> -->
            <div class="flex gap-3">
                <Check class="shrink-0" v-model="confirmCheckbox"></Check>
                <BasketSimple class="-mt-px !text-[13px]">
                    Я соглашаюсь с  <NuxtLink class="monster font-bold" to="/confidentiality.docx" external>
                        политикой
                        конфиденциальности
                    </NuxtLink> и даю согласие на <NuxtLink class="monster font-bold" to="/compliance.docx">
                        обработку
                        персональных данных
                    </NuxtLink>
                </BasketSimple>
            </div>
            <Button :disabled="!confirmCheckbox" class="mt-3 md:mt-5" title="Продолжить" @click="nextStep()"></Button>
        </div>
        <div class="absolute bottom-4 w-full pr-12" v-if="!products.length">
            <Button @click="closeBasket" title="Вернуться на сайт"></Button>
        </div>

    </div>

</template>


<script setup>
import SimpleText from '../text/SimpleText.vue';
import Close from './Close.vue';
import BasketHeader from '../text/BasketHeader.vue';
import BasketSimple from '../text/BasketSimple.vue';
import { fontSize } from '~/helpers/freeze';
import { closeBasket, products } from '~/helpers/sail';
import MiniClose from './MiniClose.vue';
import MiniProduct from './MiniProduct.vue';
import EmailConfirm from './EmailConfirm.vue';

import Button from '../basic/Button.vue';
import Check from '../basic/Check.vue';
import Input from '../basic/Input.vue';
import PayStep from './PayStep.vue';

import { usePresetsStore } from '~/stores/store';

const store = usePresetsStore();

const alertCanSee = ref(true);
const closeAlert = () => {
    alertCanSee.value = false;
}
const stepPayment = ref(false);
const confirmEmailWindow = ref(false);
const back = () => confirmEmailWindow.value = false


const surname = ref('Борщ');
const name = ref('Витя');
const patronymic = ref('Максимович');
const email = ref('seinistdasseinnigcht@gmail.com');
const phone = ref('793232323')

const fullname = computed(() => `${surname.value} ${name.value} ${patronymic.value}`);

const confirmCheckbox = ref(false);

const inputs = ref();

const present = ref(false);

const BASIC_SALE = 0.1;
const sale = computed(() => onlyPresets.value.length >= 2 ? BASIC_SALE : 0);

const onlyPresets = computed(() => products.value.filter((pr) => !pr.special));
const with_methodic = computed(() => !!products.value.find((pr) => pr.id === 'methodic'));
const with_learning = computed(() => !!products.value.find((pr) => pr.id === 'learning'));

const finalyList = computed(() => {
    let result = '';
    products.value.forEach((el) => {
        result += el.name + ', ';
    });

    return result.slice(0, -2);
})

const productsWithSale = computed(() => products.value.map((el) => {
    if (!el.special) {
        el.withSale = sale.value ? el.cost * (1 - sale.value) : 0;
    } else {
        el.withSale = null
    }
    return el;
}));

const total = computed(() => {
    return productsWithSale.value.reduce((acc, current) => {
        const addition = current.withSale ? current.withSale : current.cost;
        return acc + addition;
    }, 0).toFixed(2)
});
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const getRandomInt = () => {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}
const token = ref();
const sendEmail = () => {
    store.sendCode(token.value, email.value);
    console.log('email emulation' + token.value);
};

const nextStep = () => {
    let finalResult = true;
    let firstErrorElement = null;
    const elems = inputs.value?.children;
    for (const elem of elems) {
        const isEmail = elem.getAttribute('email');
        const val = elem.getAttribute('value');
        let result;
        if (isEmail !== 'true') {
            result = !!val;
        } else {
            result = !!EMAIL_REGEXP.test(val);
        }
        if (!result) {
            finalResult = false;
            if (!firstErrorElement) {
                firstErrorElement = elem;
            }
            elem.classList.add('!border-error');
            setTimeout(() => {
                elem.classList.remove('!border-error');
                if (firstErrorElement) {
                    firstErrorElement.focus();
                }
                requestAnimationFrame(() => {
                    firstErrorElement = null
                })
            }, 2000)
        }
    }
    if (finalResult) {
        confirmEmailWindow.value = true;
        const presetsIds = onlyPresets.value.map((el) => {
            return { documentId: el.documentId }
        });
        const postData = {
            name: fullname.value,
            email: email.value,
            with_methodic: with_methodic.value,
            with_learning: with_learning.value,
            present: present.value,
            preset_collections: {
                set: presetsIds
            }
        }

        store.createSale(postData);
        token.value = getRandomInt();
        sendEmail();
    }
}

const recode = () => {
    token.value = getRandomInt();
    sendEmail();
}

const onClosePayment = () => {
    confirmEmailWindow.value = false;
    stepPayment.value = false;
}

const pay = () => {
    stepPayment.value = true;
};

</script>
