<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Sidebar from "./components/Sidebar.vue";
import Search from "./components/Search/Search.vue";

</script>

<template>
  <div class="flex flex-row">
    <Sidebar data-tauri-drag-region />
    <div class="pr-6 pl-6 pb-6 w-full h-full">
      <div data-tauri-drag-region class="w-full h-6" />
      <Search />
      <div class="relative mt-3 overflow-y-auto h-[calc(100vh-5.30rem)]">
        <div class="fixed h-8 w-full bg-gradient-to-b from-granite to-transparent" />
        <transition mode="out-in">
          <router-view />
        </transition>
        <div class="fixed bottom-0 h-8 w-full bg-gradient-to-t from-granite to-transparent" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply dark:bg-granite dark:text-white overflow-y-hidden;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

::-webkit-scrollbar, ::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: white;
    border: 7px solid transparent;
    background-clip: content-box;
    border-radius: 10px;
}
</style>