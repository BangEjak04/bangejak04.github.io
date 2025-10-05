export default {
    template: `
        <nav class="bg-gray-800 p-4 shadow-lg">
            <div class="container mx-auto flex justify-between items-center">
                <router-link to="/" class="text-white text-xl font-bold">LogoApp</router-link>
                <div class="space-x-4">
                    <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
                    <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
                    <router-link to="/ar" class="text-gray-300 hover:text-white">AR</router-link>
                </div>
            </div>
        </nav>
    `
}