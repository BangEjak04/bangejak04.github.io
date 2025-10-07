<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import AppLogo from './AppLogo.vue';

const data = {
  navMain: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
      items: [
        {
          title: 'Laravel',
          url: '/projects/laravel',
        },
        {
          title: 'Vue',
          url: '/projects/vue',
        },
        {
          title: 'Augmented Reality',
          url: '/projects/augmented-reality',
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <RouterLink to="/">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" as-child>
              <RouterLink to="/">
                <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-black bg-cover text-sidebar-primary-foreground dark:bg-white">
                  <AppLogo class="size-4 fill-white dark:fill-black" />
                </div>
                <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">Bang Ejak</h4>
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </RouterLink>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in data.navMain" :key="item.title">
            <SidebarMenuButton as-child>
              <RouterLink :to="item.url" class="font-medium">
                {{ item.title }}
              </RouterLink>
            </SidebarMenuButton>
            <SidebarMenuSub v-if="item.items != null">
              <SidebarMenuSubItem v-for="childItem in item.items" :key="childItem.title">
                <SidebarMenuSubButton as-child>
                  <RouterLink :to="childItem.url" activeClass="bg-neutral-100 dark:bg-neutral-800">{{ childItem.title }}
                  </RouterLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
