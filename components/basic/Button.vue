<template>
    <div class="grid place-items-center monster h-button rounded-button cursor-pointer border border-px border-main px-6"
        :class="[colorClasses, disabled ? 'opacity-40 pointer-event-none' : '']">
        {{ title }}
    </div>
</template>

<script setup>
const props = defineProps({
    white: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: 'Подробнее'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const colorClasses = computed(() => !props.white ? 'bg-main text-white' : 'bg-white text-main')
</script>