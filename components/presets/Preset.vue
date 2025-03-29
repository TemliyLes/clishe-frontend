<template>
    <div class="sm:flex">
        <div class="basis-1/3">
            <BeforeAfter :data="data.slides[0]" />
        </div>
    </div>
</template>

<script setup>
import BeforeAfter from './BeforeAfter.vue';

defineProps({
    data: {
        type: Object,
        default: () => { }
    }
});

</script>
