<template>
    <Container>
        <div class="pt-16 w-full h-dvh">
            <Superheader>Оплата продукта</Superheader>
            <form class="payform-tbank" name="payform-tbank" id="payform-tbank" ref="tbankRef">
                <input class="payform-tbank-row" type="hidden" name="terminalkey" value="1745854311395DEMO">
                <input class="payform-tbank-row" type="hidden" name="frame" value="false">
                <input class="payform-tbank-row" type="hidden" name="language" value="ru">
                <input class="payform-tbank-row" type="hidden" name="receipt" value="">
                <input class="payform-tbank-row" type="text" placeholder="Сумма заказа" name="amount" required>
                <input class="payform-tbank-row" type="hidden" placeholder="Номер заказа" name="order">
                <input class="payform-tbank-row" type="text" placeholder="Описание заказа" name="description">
                <input class="payform-tbank-row" type="text" placeholder="ФИО плательщика" name="name">
                <input class="payform-tbank-row" type="email" placeholder="E-mail" name="email">
                <input class="payform-tbank-row" type="tel" placeholder="Контактный телефон" name="phone">
                <input class="payform-tbank-row payform-tbank-btn" type="submit" value="Оплатить">
            </form>
            <div @click="baduba()">BANK ANSWER</div>

            <div @click="badubaServer()">BANKbadubaServer ANSWER</div>
        </div>

    </Container>
</template>

<script setup>
import Superheader from '~/components/text/Superheader.vue';
import Container from '~/components/basic/Container.vue';
useHead({
    script: [
        {
            src: 'https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js',
            tagPosition: 'head'
        }
    ]
});
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
})

const tbidi = {
    "TerminalKey": "1745854311395DEMO",
    "OrderId": "1746957622940",
    "Success": true,
    "Status": "CONFIRMED",
    "PaymentId": 6344117753,
    "ErrorCode": "0",
    "Amount": 520000,
    "CardId": 559032621,
    "Pan": "430000******0777",
    "ExpDate": "1230",
    "Token": "ae501c0f90fb6613537dece43ec4660bce6e02700fcae315948e34bdfec8a276",
    "Data": {
        "screenWidth": "1536",
        "Email": "seinistdasseinnigcht@gmail.com",
        "VeAuthRc": "00",
        "connection_type": "Widget2.0",
        "screenHeight": "864",
        "Source": "cards",
        "Name": "Борщ Витя Максимович",
        "connection_type_pf": "true",
        "isMIDSyncEnabled": "true",
        "accept": "application/json, text/plain, */*",
        "SEND_EMAIL": "Y",
        "javaEnabled": "false",
        "payAction": "3DS",
        "order_id_unique_processed": "ignored",
        "guid": "8ff5c22c-fbbd-a3cd-4ea2-7e4e8c9efe95",
        "colorDepth": "24",
        "INFO_EMAIL": "seinistdasseinnigcht@gmail.com",
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "REDIRECT": "false"
    }
}

const baduba = () => {
    $fetch('http://localhost:1337/api/payment', {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify(tbidi)
    })
}

const badubaServer = () => {
    $fetch('https://api.cliche.academy/api/payment', {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify(tbidi)
    })
}

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
    max-width: 350px;
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
    border: 1px solid #B1B0AF;
    padding: 15px;
    outline: none;
    background-color: #fff;
    font-size: 15px;
}

.payform-tbank-row:focus {
    background-color: #FFFFFF;
    border: 1px solid #B1B0AF;
    border-radius: 4px;
}

.payform-tbank-btn {
    background-color: #ffffff;
    border: 1px solid #B1B0AF;
    color: #3B3938;
}

.payform-tbank-btn:hover {
    color: #fff;
    background-color: #3B3938;
    border: 1px solid #3B3938;
}
</style>
