<template>
    <div>
        <Title>About</Title>
        <Header restructed :static="isMobile" :static-active="isActiveHeader">
            Cliche academy — это академия мобильной фотографии без рамок для творчества. И именно этот факт позволяет
            академии носить имя Cliche.
        </Header>
        <div class="block sm:flex">
            <div class="hidden sm:block basis-1/4"></div>
            <div class="basis-3/4">
                <SimpleText class="sm:mt-12 mt-6" :size="[18, 30]">Наши ученики не знают границ в мире мобильной
                    фотографии,
                    благодаря
                    чему становятся
                    настоящим клише
                    или каноном для окружающих.
                </SimpleText>
                <SimpleText class="sm:mt-6 mt-4" :size="[18, 30]">
                    В нашем доме эстетики никто никого не копирует, ведь в процессе обучения ребята ищут себя и свой
                    аутентичный
                    стиль.
                </SimpleText>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../text/Title.vue';
import Header from '../text/Header.vue';
import SimpleText from '../text/SimpleText.vue';
import { scrollY } from '~/helpers/scroll';
import { isMobile } from '~/helpers/break';

const isActiveHeader = computed(() => scrollY.value > 80);
</script>