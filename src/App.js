import Navbar from "./components/Navbar.js";

export default {
    components: {
        Navbar
    },
    template: `
        <Navbar />
        
        <main class="max-w-7xl mx-auto">
            <router-view />
        </main>
    `
}