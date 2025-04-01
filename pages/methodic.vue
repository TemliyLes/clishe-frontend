<template>
    <div class="relative">
        <Screen>
            <MethScreen />
        </Screen>
    </div>
</template>


<script setup>
import Screen from '~/components/basic/Screen.vue';

import MethScreen from '~/components/blocks/MethScreen.vue';
import { clear } from '~/helpers/scroll';

onBeforeMount(() => {
    clear()
})

</script>