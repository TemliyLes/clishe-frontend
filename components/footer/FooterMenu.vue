<template>
    <div class="basis-1/3">
        <Title class="!mb-4">{{ title }}</Title>
        <div v-if="list">
            <div v-for="(a, index) in list" :key="index" :style="fontSize(14, 16)"
                class="monster text-white cursor-pointer mb-3">
                {{ a }}
            </div>
        </div>
        <div v-if="!list.length">
            <div class="flex gap-4">
                <IGIL class="cursor-pointer" />
                <Telega class="cursor-pointer" />
            </div>
            <div class="monster leading-6 my-3 text-light" :style="fontSize(14, 16)">
                * Instagram признан экстремистской организацией и запрещен на территории России
            </div>
            <div class="monster leading-6 my-3 text-white" :style="fontSize(14, 16)">
                ИП Урядова Алина Васильевна<br />
                ИНН: 642102268108<br />
                ОГРНИП: 324645700053870

            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../text/Title.vue';
import { fontSize } from '~/helpers/freeze';

import IGIL from '~/assets/icons/social/IGIL.vue';
import Telega from '~/assets/icons/social/Telega.vue';
defineProps({
    title: {
        type: String,
        default: '',
    },
    list: {
        type: Array,
        default: () => [],
    }
});
</script>