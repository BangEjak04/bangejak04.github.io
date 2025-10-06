<script setup lang="ts">
import ThemeModeButton from './ThemeModeButton.vue'
import { SidebarTrigger } from './ui/sidebar'
</script>

<template>
  <header class="bg-white dark:bg-neutral-950 sticky top-0 z-30 w-full">
    <div class="px-6">
      <div class="h-14 flex gap-2 items-center">
        <SidebarTrigger />
        <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <ThemeModeButton />
        </div>
      </div>
    </div>
  </header>
</template>
