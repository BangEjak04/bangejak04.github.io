import { ref, watch, onMounted, onUnmounted } from 'vue';

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true
        }
    },
    
    emits: ['update:modelValue'],

    setup(props, { emit }) {
        const sidebarPanel = ref(null);
        
        const handleClickOutside = (event) => {
            if (event.target.closest('[data-sidebar-toggle]')) {
                return;
            }

            if (!props.modelValue || !sidebarPanel.value) {
                return;
            }

            if (!sidebarPanel.value.contains(event.target)) {
                emit('update:modelValue', false);
            }
        };
        
        onMounted(() => {
            document.addEventListener('mousedown', handleClickOutside);
        });

        onUnmounted(() => {
            document.removeEventListener('mousedown', handleClickOutside);
        });

        watch(() => props.modelValue, (isOpen) => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        return {
            sidebarPanel
        };
    },

    template: `
        <Transition name="sidebar-fade">
            <div v-if="modelValue" class="absolute inset-0 flex justify-start z-20">
                
                <div
                    ref="sidebarPanel"
                    class="relative z-30 flex flex-col w-full bg-white/80 backdrop-blur-sm shadow-xl transform transition-transform duration-150 ease-in-out dark:bg-neutral-950/80"
                    :class="{ 'translate-x-0': modelValue, '-translate-x-full': !modelValue }"
                >
                    <div class="h-full">
                        <slot></slot>
                    </div>
                </div>
                
            </div>
        </Transition>
    `
};