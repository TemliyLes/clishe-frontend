<template>
    <div :style="[containerStyles, gridTemplate]">
        <div :style="slotBlockStyles">
            <slot />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
});
const slotBlockStyles = "overflow:hidden";
const containerStyles =
    "display:grid;transition: grid-template-rows 0.4s ease;will-change:height;";
const gridTemplate = computed(() =>
    !props.active ? "grid-template-rows: 0fr;" : "grid-template-rows: 1fr;"
);
</script>