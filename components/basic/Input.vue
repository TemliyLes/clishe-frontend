<template>
    <input :email="email"
        class="mt-3 block w-full border border-1 border-light rounded-md text-[14px] focus:outline outline-0 monster h-[44px] px-3 focus:border-blue"
        type="text" :placeholder="place" :value="modelValue" @blur="onOut" @input="onInput" @focus="onFocus">
</template>

<script setup>

const props = defineProps({
    place: {
        type: String,
        default: ''
    },
    email: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: String,
        default: '',
    },
    error: {
        type: Boolean,
        default: false,
    }
});
const emit = defineEmits(['update:modelValue']);

// const validated = ref(false);
// const isError = ref(false);

// const checkValid = (e) => {
//     let result;
//     if (!props.email) {
//         result = !!props.modelValue
//     } else {
//         result = !!EMAIL_REGEXP.test(props.modelValue)
//     }
//     if (!result) {
//         isError.value = true
//     }
//     return result
// }

const onInput = (e) => {
    emit('update:modelValue', e.target.value);
}


</script>