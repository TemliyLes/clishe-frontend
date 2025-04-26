<template>
    <div v-if="flag" :class="staticActive ? 'group static-active' : ''">
        <h2 v-restruct class="text-main -ml-0.5" :class="classList" :style="[fontSize(24, 56)]">
            <slot />
        </h2>
        <h2 :class="classList" :style="fontSize(24, 56)" v-if="restructed">
            <span
                class="transition duration-700 transition-all text-light group-[.is-next]:!delay-300 group-[.is-prev]:!delay-300"
                :style="[fontSize(24, 56), delayByIndex(index)]" :class="[classList, classByStatic]"
                v-for="(item, index) in restructedArr" :key="index">
                {{ item }}&nbsp;
            </span>
        </h2>
    </div>
</template>

<script setup>
import { fontSize } from '~/helpers/freeze';

const props = defineProps({
    restructed: {
        type: Boolean,
        default: false,
    },
    static: {
        type: Boolean,
        default: false
    },
    staticActive: {
        type: Boolean,
        default: false
    }
});


const flag = ref(false);
const DELAY_BASIC = 200;

const classList = 'monster leading-[120%]';
const restructedArr = ref([]);

const delayByIndex = (index) => `transition-delay: ${index * DELAY_BASIC}ms`;

const classByStatic = computed(() => !props.static ? 'group-[.is-active]:text-main' : 'group-[.static-active]:text-main')

const vRestruct = {
    mounted: e => {
        if (props.restructed) {
            restructedArr.value = e.innerText.split(' ');
            e.style.display = 'none';
        }
    }
};

onMounted(() => {
    requestAnimationFrame(() => {
        flag.value = true;
    })
})
</script>