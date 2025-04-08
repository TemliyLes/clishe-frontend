<template>
    <div class="relative -mt-2 -mr-2">
        <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.748 14H34.748" :stroke="bg" stroke-width="1.6" stroke-linecap="round" />
            <path d="M10.748 22H34.748" :stroke="bg" stroke-width="1.6" stroke-linecap="round" />
            <path d="M10.748 30H34.748" :stroke="bg" stroke-width="1.6" stroke-linecap="round" />
        </svg>

    </div>
</template>

<script setup>
defineProps({
    bg: {
        type: String,
        default: '#111'
    }
})
</script>