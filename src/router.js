import { createRouter, createWebHashHistory } from "vue-router";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import AR from "./pages/AR.js";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/ar', component: AR },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;