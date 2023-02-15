<script setup>
//icons
import mainIcon from "@/assets/main-menu-item.svg"
import notesIcon from "@/assets/notes-menu-item.svg"
import settingsIcon from "@/assets/settings-menu-item.svg"
import goalsIcon from "@/assets/goals-menu-item.svg"

</script>

<template>
  <nav class="flex flex-row dark:bg-blackgray-100 bg-barley w-24 h-screen items-center">
    <ul class="grid mx-auto gap-y-6">
      <li><router-link to="/"><mainIcon></mainIcon></router-link></li>
      <li><router-link to="/notes"><notesIcon></notesIcon></router-link></li>
      <li><router-link to="/goals"><goalsIcon></goalsIcon></router-link></li>
      <li><router-link to="/settings"><settingsIcon></settingsIcon></router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active svg {
  @apply opacity-100 ease-in-out duration-150;
}

a svg {
  @apply dark:fill-white fill-black opacity-25  ease-in-out duration-150;
}
</style>