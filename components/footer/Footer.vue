<template>
    <Screen bg="#3B3938" blured>
        <div v-if="!isMobile">
            <footer>
                <div class="flex justify-between">
                    <div class="basis-5/12">
                        <h5 class="leading-none text-white mt-6" :style="fontSize(30, 66.6)">фото — это не щелк<br />
                            это миллисекунда жизни</h5>
                    </div>
                    <div class="flex gap-6 basis-7/12">
                        <FooterMenu v-for="(menu, index) in footerMenuData" :title="menu.title" :list="menu.list"
                            :key="index" />
                    </div>
                </div>
            </footer>
            <div
                class="absolute px-container sm:px-container-d bottom-0 delay-500 left-0 w-full transition duration-700 translate-y-0 group-[.is-next]:translate-y-full">
                <FooterLogo />
            </div>
        </div>
        <div class="p-36" v-else>
            FOOTER MOBILE
        </div>
    </Screen>

</template>

<script setup>
import Screen from '../basic/Screen.vue';
import { fontSize } from '~/helpers/freeze';

import FooterMenu from './FooterMenu.vue';
import FooterLogo from '~/assets/icons/FooterLogo.vue';
import { isMobile } from '~/helpers/break';

const footerMenuData = [
    {
        title: 'Products',
        list: ['Методическое пособие', 'Адвент', 'Presets | Color collections', 'Обучение'],
    },
    {
        title: 'Клиентам',
        list: ['Согласие', 'Положение'],
    },
    {
        title: 'Контакты',
    },
]
</script>