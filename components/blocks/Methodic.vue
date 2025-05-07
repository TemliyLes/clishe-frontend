<template>
    <div>
        <Title>Products</Title>
        <div class="flex sm:flex-row justify-between flex-col-reverse">
            <div class="sm:flex basis-1/4 bg-grey">
                <img class="aspect-method object-cover w-full" src="/public/alinacliche.png" alt="method" />
            </div>
            <div class="basis-2/3">
                <Header class="sm:!mb-16 mb-4 sm:-ml-1">Методическое пособие</Header>
                <div class="sm:flex justify-between">
                    <div class="basis-[56.25%]">
                        <SimpleText class="leading-method-big" :style="fontSize(16, 18)"
                            v-for="(p, pIndex) in paragraphs" :key="pIndex">{{ p.children[0]?.text }}
                        </SimpleText>
                    </div>
                    <div class="basis-[37.5%] mt-1">
                        <SimpleText class="leading-method-big" :style="fontSize(14, 16)" v-for="(s, sIndex) in another"
                            :key="sIndex">{{ s.children[0]?.text }}
                        </SimpleText>
                    </div>
                </div>
                <NuxtLink to="/methodic"><Button @click="emit('buy')" class="my-7 sm:mt-16 w-[157px]" /></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../text/Title.vue';
import Header from '../text/Header.vue';
import SimpleText from '../text/SimpleText.vue';
import Button from '../basic/Button.vue';

import { fontSize } from '~/helpers/freeze';

import { usePresetsStore } from '~/stores/store';
const store = usePresetsStore();
const emit = defineEmits('buy');
const paragraphs = computed(() => store?.methodic?.data?.shortBlockTitle);
const another = computed(() => store?.methodic?.data?.shortBlockDescription);

</script>