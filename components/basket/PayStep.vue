<template>
    <div :class="active ? 'translate-x-0' : 'translate-x-full'"
        class="absolute flex flex-col justify-between px-5 py-10 z-email w-full h-full top-0 left-0 transform will-change-trasform transition duration-500 bg-white">
        <Close @click="emit('close')" class="absolute right-5" />
        <div>
            <BasketHeader>Оплата заказа:</BasketHeader>
            <div class="mt-6">
                <div v-for="(item, index) in fields" :key="index" class="flex gap-4 justify-between mt-2">
                    <BasketSimple class="font-medium basis-1/3">{{ item }}:</BasketSimple>
                    <BasketSimple class="basis-2/3">{{ fValues[index] }}</BasketSimple>
                </div>

            </div>
        </div>
        <div class="flex flex-col justify-between">
            <form class="payform-tbank" name="payform-tbank" id="payform-tbank" ref="tbankRef">
                <input class="payform-tbank-row" type="hidden" name="terminalkey" value="1745854311395DEMO">
                <input class="payform-tbank-row" type="hidden" name="frame" value="false">
                <input class="payform-tbank-row" type="hidden" name="language" value="ru">
                <input class="payform-tbank-row" type="hidden" name="receipt" value="">
                <input :value="total" class="payform-tbank-row" type="text" placeholder="Сумма заказа" name="amount"
                    required>
                <input class="payform-tbank-row" type="hidden" placeholder="Номер заказа" name="order">
                <input :value="list" class="payform-tbank-row" type="text" placeholder="Описание заказа"
                    name="description">
                <input :value="fullname" class="payform-tbank-row" type="text" placeholder="ФИО плательщика"
                    name="name">
                <input :value="email" class="payform-tbank-row" type="email" placeholder="E-mail" name="email">
                <input :value="phone" class="payform-tbank-row" type="tel" placeholder="Контактный телефон"
                    name="phone">
                <input class="payform-tbank-row payform-tbank-btn monster" type="submit" value="Оплатить">
            </form>
        </div>
    </div>

</template>

<script setup>
import BasketHeader from '../text/BasketHeader.vue';
import BasketSimple from '../text/BasketSimple.vue';
import Close from './Close.vue';
useHead({
    script: [
        {
            src: 'https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js',
            tagPosition: 'head'
        }
    ]
});
const emit = defineEmits(['close']);

const fields = ['ФИО', 'Описание заказа', 'Email', 'Контактый телефон', 'Сумма заказа']
const fValues = computed(() => [props.fullname, props.list, props.email, props.phone, props.total + ' ₽'])

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    },
    fullname: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    total: {
        type: Number,
        default: 0
    },
    list: {
        type: String,
        default: '',
    }
})

const tbankRef = ref(null);
onMounted(() => {
    const TPF = tbankRef.value;
    TPF.addEventListener("submit", function (e) {
        e.preventDefault();
        const { description, amount, email, phone, receipt } = TPF;

        if (receipt) {
            if (!email.value && !phone.value)
                return alert("Поле E-mail или Phone не должно быть пустым");

            TPF.receipt.value = JSON.stringify({
                "EmailCompany": "aliiiiiiishaa@mail.ru",
                "Taxation": "patent",
                "FfdVersion": "1.2",
                "Items": [
                    {
                        "Name": description.value || "Оплата",
                        "Price": Math.round(amount.value * 100),
                        "Quantity": 1.00,
                        "Amount": Math.round(amount.value * 100),
                        "PaymentMethod": "full_prepayment",
                        "PaymentObject": "service",
                        "Tax": "none",
                        "MeasurementUnit": "pc"
                    }
                ]
            });
        }
        pay(TPF);
    });
});


</script>

<style>
.payform-tbank {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 2px auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
}

.payform-tbank-row {
    margin: 2px;
    border-radius: 4px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    /* border: 1px solid #B1B0AF; */
    padding: 10px;
    outline: none;
    /* background-color: #fff; */
    font-size: 16px;
    pointer-events: none;
    visibility: collapse;
}

.payform-tbank-row:focus {
    background-color: #FFFFFF;
    border: 1px solid #B1B0AF;
    border-radius: 4px;
}

.payform-tbank-btn {
    color: #fff;
    background-color: #3B3938;
    border: 1px solid #3B3938;
    cursor: pointer;
    pointer-events: all;
    border-radius: 60px;
    font-size: 16px;
    visibility: visible;
}

.payform-tbank-btn:hover {
    color: #fff;
    background-color: #3B3938;
    border: 1px solid #3B3938;
}
</style>
