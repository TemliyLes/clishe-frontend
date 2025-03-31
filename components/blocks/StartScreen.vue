<template>
    <div>
        <Superheader>
            фото — это не щелк<br />
            это миллисекунда жизни
        </Superheader>
        <Image class="aspect-mainscreen sm:aspect-mainscreen-d object-cover w-full"
            src="https://newneuro.ru/wp-content/uploads/2021/11/u-zhenshhiny-bolit-golova-vecherom.jpg" />
    </div>
</template>

<script setup>
import Superheader from '../text/Superheader.vue';
import Image from '../basic/Image.vue';
</script>