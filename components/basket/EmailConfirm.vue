<template>
    <div class="absolute flex flex-col justify-between px-5 py-10 z-email w-full h-full top-0 left-0 transform will-change-trasform transition duration-500 bg-white"
        :class="active ? 'translate-x-0' : 'translate-x-full'" @click="focusIn()">
        <div>
            <BasketHeader>Подтверждение e-mail</BasketHeader>
            <BasketSimple class="mt-6">Отправили код подтверждения на указанный адрес:</BasketSimple>
            <BasketSimple class="mt-3 font-bold">{{ email }}</BasketSimple>
            <BasketSimple class="mt-3">Пожалуйста, введите его в поле ниже:</BasketSimple>
            <div class="relative h-[44px] mt-6 ">
                <input ref="hiddenInput" v-model="enterText" maxlength="4" type="text" @input="onInput" @click="onClick"
                    class="border-none bg-transparent outline-none pl-3 h-[44px] text-[32px] tracking-[39.5px]"></input>

                <div inert class="flex gap-4 absolute top-0 h-full">
                    <div v-for="(item, index) in list" :key="index"
                        class="w-9 h-full border border-light border-1 rounded-md bg-white grid place-items-center relative">
                        <span class="text-[32px] -mt-[2px]">{{ item }}</span>
                        <div class="absolute transition will-change-transform duration-300 bottom-1.5 w-4 h-[2px] bg-grey"
                            :class="activeField === index ? 'scale-x-1' : 'scale-x-0'"></div>
                    </div>
                </div>
            </div>
            <div class="mt-9 flex gap-1">
                <div @click="toggleActiveNoCode"
                    class="cursor-pointer h-[10px] mt-0.5 transform transition duration-300 origin-bottom"
                    :class="!noCodeActiveFlag ? 'rotate-180 -translate-y-1' : 'rotate-0'">
                    <Chevron />
                </div>
                <div>
                    <BasketSimple class="pb-1 cursor-pointer" @click="toggleActiveNoCode">Не приходит код?
                    </BasketSimple>
                    <Collapsed :active="noCodeActiveFlag">
                        <BasketSimple class="pb-1">Проверьте, нет ли ошибки в e-mail</BasketSimple>
                        <BasketSimple class="pb-1">Проверьте папку «спам»</BasketSimple>
                        <BasketSimple class="pb-1">Если сообщение не приходит, попробуйте запросить код еще раз
                        </BasketSimple>

                    </Collapsed>
                </div>
            </div>
        </div>
        <Button @click="back" white title="Назад"></Button>
    </div>
</template>

<script setup>
import BasketHeader from '../text/BasketHeader.vue';
import BasketSimple from '../text/BasketSimple.vue';
import Button from '../basic/Button.vue';
import Collapsed from '../other/Collapsed.vue';
import Chevron from '~/assets/icons/Chevron.vue';

const props = defineProps({
    active: {
        type: Boolean,
        default: true,
    },
    email: {
        type: String,
        default: 'defaulr@sad.e',
    }
});

const noCodeActiveFlag = ref(false);
const toggleActiveNoCode = () => noCodeActiveFlag.value = !noCodeActiveFlag.value;
const emit = defineEmits(['back']);

const hiddenInput = ref();

const activeField = ref(0);

const enterText = ref('');
const list = computed(() => {
    const result = [' ', ' ', ' ', ' '];
    result.forEach((element, index) => {
        const val = enterText.value?.[index];
        result[index] = enterText ? val : ' '
    });
    return result;
});


const onClick = e => {
    activeField.value = e.target.selectionStart;
}
const onInput = e => {
    if (e.target.value.length <= 4) {
        activeField.value = e.target.selectionStart;
    }
    if (e.target.value.length === 4) {
        e.target.blur()
    }
}
const focusIn = () => {
    hiddenInput.value.focus();
}
const back = () => {
    emit('back');
}

watch(() => props.active, val => {
    if (val) {
        hiddenInput.value.focus();
        activeField.value = 0;
    } else {
        enterText.value = ''
    }
});
</script>