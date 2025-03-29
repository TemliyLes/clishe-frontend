<template>
    <div>
        <Screen scroll blured>
            <PresetsDemo />
        </Screen>
        <Screen bg="#E8E4D9" class="z-30">
            <StartScreen />
        </Screen>
        <Screen blured scroll>
            <div class="w-56">
                Это пока вместо блока с горизонтальным скроллом
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam recusandae est expedita
                ipsa natus corrupti aspernatur quaerat nobis dolor alias quasi sunt, assumenda voluptatum, atque quam
                repellendus veritatis at rerum asperiores. Officiis quasi et, nostrum dolorum, ipsa, dolor inventore
                voluptate fuga eveniet deleniti culpa natus nulla consequatur odio totam excepturi sunt quidem illum at
                fugiat quas quo voluptatibus. A fuga sunt ipsum vel, tenetur repellat architecto perspiciatis ut quidem
                unde
                quisquam culpa corrupti fugiat excepturi vitae quos adipisci quae suscipit temporibus totam rerum
                similique.
                Reiciendis quisquam necessitatibus est laudantium aspernatur illum cumque dolores perspiciatis commodi
                assumenda perferendis omnis, impedit rem corporis fuga beatae ipsam quidem sint expedita quod ducimus
                asperiores voluptatem saepe. Corrupti assumenda laudantium vel saepe modi molestias, pariatur ratione
                laborum libero tempore quide
                lorem120
            </div>
        </Screen>
        <Screen white blured full>
            <WithLove />
        </Screen>
        <Screen blured>
            <Methodic></Methodic>
        </Screen>
        <Screen>
            WithLove
        </Screen>
    </div>
</template>

<script setup>

import Screen from '~/components/basic/Screen.vue';

import StartScreen from '~/components/blocks/StartScreen.vue';
import WithLove from '~/components/blocks/WithLove.vue';
import Methodic from '~/components/blocks/Methodic.vue';
import PresetsDemo from '~/components/blocks/PresetsDemo.vue';

</script>