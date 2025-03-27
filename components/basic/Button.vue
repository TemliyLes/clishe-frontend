<template>
    <div class="grid place-items-center monster h-button rounded-button cursor-pointer border border-px border-main w-[157px]"
        :class="colorClasses">
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
    }
})

const colorClasses = computed(() => !props.white ? 'bg-main text-white' : 'bg-white text-main')
</script>