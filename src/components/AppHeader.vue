<script setup lang="ts">
import AppLogo from './AppLogo.vue';
import ThemeModeButton from './ThemeModeButton.vue'
import { SidebarTrigger } from './ui/sidebar'
</script>

<template>
  <header class="bg-white dark:bg-neutral-950 sticky top-0 z-30 w-full">
    <div class="px-6">
      <div class="h-14 flex gap-2 items-center justify-between">
        <SidebarTrigger />
        <div class="flex items-center gap-2">
          <AppLogo class="size-6 fill-black dark:fill-white" />
          <h4 class="hidden scroll-m-20 text-xl font-semibold tracking-tight sm:block">
            Bang Ejak
          </h4>
        </div>
        <div class="flex items-center gap-2 md:flex-1 md:justify-end">
          <ThemeModeButton />
        </div>
      </div>
    </div>
  </header>
</template>
