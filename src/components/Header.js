export default {
    props: ['isDarkMode'],
    emits: ['toggle-sidebar', 'toggle-dark-mode'],
    template: `
        <header class="bg-white dark:bg-neutral-950 sticky top-0 z-30 w-full">
            <div class="px-6">
                <div class="h-14 flex gap-2 items-center">
                    <button data-sidebar-toggle @click="$emit('toggle-sidebar')" class="flex items-center gap-2 rounded-md focus:outline-none">
                        <svg class="size-6 -my-1 -ml-0.5 dark:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="9" y2="9"/><line x1="5" x2="19" y1="15" y2="15"/></svg>
                        <span class="flex h-8 items-center text-lg leading-none font-medium dark:text-white">Menu</span>
                    </button>
                    <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                        <button @click="$emit('toggle-dark-mode')" class="inline-flex items-center justify-center gap-2 rounded-md text-sm transition-all hover:bg-slate-100 dark:hover:bg-white/10 size-8">
                            <svg v-if="isDarkMode" class="size-4.5 stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                            <svg v-else class="size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    `
};