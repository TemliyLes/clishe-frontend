<template>
    <h2 class="text-xl monster" :style="fontSize(24, 56)"><slot/></h2>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';

</script>