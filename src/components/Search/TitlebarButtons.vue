<script setup>
import { appWindow } from '@tauri-apps/api/window'
</script>

<template>
  <div class="flex flex-row gap-x-2 my-auto pl-3">
    <div class="rounded-full w-4 h-4 bg-red-500 hover:bg-red-700" @click="() => appWindow.minimize()"></div>
    <div class="rounded-full w-4 h-4 bg-yellow-500 hover:bg-yellow-700" @click="() => appWindow.toggleMaximize()"></div>
    <div class="rounded-full w-4 h-4 bg-green-500 hover:bg-green-700" @click="() => appWindow.close()"></div>
  </div>
</template>