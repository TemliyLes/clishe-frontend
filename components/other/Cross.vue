<template>
    <div>
        <div
            class=" w-[32px] h-[32px] sm:w-[44px] sm:h-[44px] border border-1 border-main rounded-full grid place-items-center">
            <div class="bg-main absolute w-4 sm:w-7 h-px transform will-change-transform"></div>
            <div class="bg-main absolute w-4 sm:w-7 h-px transition transform will-change-transform duration-200"
                :class="opened ? 'rotate-90' : 'rotate-0'"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    opened: {
        type: Boolean,
        default: true,
    }
})
</script>