<script setup>
import TitlebarButtons from './TitlebarButtons.vue';
import searchIcon from '@/assets/search-item.svg'
</script>

<template>
    <div class = "flex flex-row py-3 px-3 w-full resize-none rounded-lg bg-blackgray">
        <searchIcon class="mr-4" />
        <input class="bg-transparent w-full" placeholder="Поиск"/>
        <TitlebarButtons/>
    </div>
</template>