<template>
    <div class="basis-1/3">
        <Title class="!mb-4">{{ title }}</Title>
        <div v-if="list">
            <NuxtLink v-for="(a, index) in list" :target="a.blank ? '_blank' : ''" :key="index"
                :style="fontSize(14, 16)" :to="a.to" class="monster text-white cursor-pointer mb-3 block"
                :external="a.external">
                {{ a.title }}
            </NuxtLink>

        </div>
        <div v-if="!list.length">
            <div class="flex gap-4">
                <NuxtLink target="_blank" external to="https://www.instagram.com/facepublicenemy/?hl=ru">
                    <IGIL class="cursor-pointer" />
                </NuxtLink>
            </div>
            <div class="monster leading-6 my-3 text-light !text-[12px] leading-[120%]" :style="fontSize(14, 16)">
                * Instagram признан экстремистской организацией и запрещен на территории России
            </div>
            <div class="monster leading-6 my-3 text-white !text-[12px] leading-[120%]" :style="fontSize(14, 16)">
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