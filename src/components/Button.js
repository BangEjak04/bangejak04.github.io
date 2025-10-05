// src/components/Button.js
export default {
    props: {
        // Kita bisa menambahkan props untuk mengubah warna, ukuran, dll.
        theme: {
            type: String,
            default: 'primary' // 'primary', 'secondary'
        }
    },
    computed: {
        // Gunakan computed property untuk menentukan kelas berdasarkan props
        themeClasses() {
            if (this.theme === 'primary') {
                return 'bg-blue-500 hover:bg-blue-700 text-white';
            }
            if (this.theme === 'secondary') {
                return 'bg-gray-500 hover:bg-gray-700 text-white';
            }
            return '';
        }
    },
    template: `
        <button 
            :class="themeClasses"
            class="py-2 px-4 font-poppins font-semibold rounded-lg shadow-md transition-colors duration-300"
        >
            <slot></slot>
        </button>
    `
};