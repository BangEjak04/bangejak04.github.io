import { ref, watchEffect } from "vue";
import Sidebar from "./components/Sidebar.js";
import Header from "./components/Header.js";

export default {
    components: {
        Sidebar,
        Header
    },
    setup() {
        const isSidebarOpen = ref(false);

        const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value;

        const isDarkMode = ref(
            localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );

        const toggleDarkMode = () => isDarkMode.value = !isDarkMode.value;

        watchEffect(() => {
            const htmlElement = document.documentElement; 
            
            if (isDarkMode.value) {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark'); 
            } else {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        });

        return {
            isSidebarOpen,
            toggleSidebar,
            isDarkMode,
            toggleDarkMode
        };
    },
    template: `
        <div class="z-10 flex min-h-svh flex-col">
            <Header @toggle-sidebar="toggleSidebar" :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />

            <div class="relative h-[calc(100vh-3.5rem)]">
                
                <Sidebar v-model="isSidebarOpen">
                    <div class="relative h-full">
                        <div class="flex flex-col gap-12 overflow-auto px-6 py-6 h-full">
                            <div class="flex flex-col gap-4">
                                <div class="text-neutral-500 text-sm font-medium dark:text-neutral-400">Menu</div>
                                <div class="flex flex-col gap-3">
                                    <router-link @click="isSidebarOpen = false" to="/" class="text-2xl font-medium text-gray-800 dark:text-neutral-50">Home</router-link>
                                    <router-link @click="isSidebarOpen = false" to="/about" class="text-2xl font-medium text-gray-800 dark:text-neutral-50">About</router-link>
                                    <router-link @click="isSidebarOpen = false" to="/ar" class="text-2xl font-medium text-gray-800 dark:text-neutral-50">Projects</router-link>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                            </div>
                        </div>
                    </div>
                </Sidebar>

                <main class="flex flex-1 flex-col">
                    <div class="flex flex-1 flex-col px-2">
                        <div class="max-w-2xl w-full mx-auto px-4 py-6 flex flex-1 flex-col gap-8 text-neutral-800 dark:text-neutral-300 md:px-0 lg:py-8">
                            <router-view />
                        </div>
                    </div>
                </main>

            </div>
        </div>
    `
}