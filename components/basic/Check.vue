<template>
    <div @click="toggle"
        class="w-[20px] h-[20px] border border-1 relative grid place-items-center cursor-pointer transition duration-300 rounded-sm"
        :class="modelValue ? 'border-main' : 'border-light'">
        <CheckLines class="absolute z-50"></CheckLines>
        <div :class="modelValue ? 'opacity-100' : 'opacity-0'"
            class="w-full h-full absolute z-40 absolute bg-main transition duration-300">
        </div>
    </div>
</template>

<script setup>
import CheckLines from '~/assets/icons/CheckLines.vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    }
});
const emit = defineEmits(['update:modelValue']);

const toggle = () => emit('update:modelValue', !props.modelValue)

</script>