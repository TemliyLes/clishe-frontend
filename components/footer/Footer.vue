<template>
    <Screen bg="#3B3938" blured>
        <div>
            <footer>
                <div class="sm:flex justify-between pt-4 sm:pt-0">
                    <div class="basis-5/12">
                        <h5 class="leading-none text-white mt-7" :style="fontSize(30, 60)">фото — это не щелк<br />
                            это миллисекунда жизни</h5>
                    </div>
                    <div class="sm:flex gap-6 basis-7/12">
                        <FooterMenu v-for="(menu, index) in footerMenuData" :title="menu.title" :list="menu.list"
                            :key="index" />
                    </div>
                </div>
            </footer>
            <div
                class="sm:absolute sm:pb-0 mt-9 sm:mt-0 px-container sm:px-container-d bottom-0 delay-500 left-0 w-full transition duration-700 translate-y-0 group-[.is-next]:translate-y-full">
                <FooterLogo />
            </div>
        </div>
    </Screen>

</template>

<script setup>
import Screen from '../basic/Screen.vue';
import { fontSize } from '~/helpers/freeze';

import FooterMenu from './FooterMenu.vue';
import FooterLogo from '~/assets/icons/FooterLogo.vue';

const footerMenuData = [
    {
        title: 'Products',
        list: [
            {
                title: 'Методическое пособие',
                to: 'methodic',
            },
            {
                title: 'Presets | Color collections',
                to: 'presets',
            },
            {
                title: 'Обучение',
                to: 'learning',
            },
        ],
    },
    {
        title: 'Клиентам',
        list: [
            {
                title: 'Согласие',
                to: '/compliance.pdf',
                external: true
            },
            {
                title: 'Положение',
                to: '/confidentiality.pdf',
                external: true
            },
            {
                title: 'Публичная оферта',
                to: '/public.pdf',
                external: true
            },
        ],
    },
    {
        title: 'Контакты',
    },
]
</script>