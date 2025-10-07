import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: { title: 'Projects' },
    },
    {
      path: '/projects/laravel',
      name: 'project-laravel',
      component: () => import('@/views/projects/LaravelView.vue'),
      meta: { title: 'Laravel' },
    },
    {
      path: '/projects/vue',
      name: 'project-vue',
      component: () => import('@/views/projects/VueView.vue'),
      meta: { title: 'Vue' },
    },
    {
      path: '/projects/augmented-reality',
      name: 'project-augmented-reality',
      component: () => import('@/views/projects/AugmentedRealityView.vue'),
      meta: { title: 'Augmented Reality' },
    },
  ],
})

router.beforeEach((to) => {
  document.title = "Loading"
})

router.afterEach((to) => {
  document.title = "Bang Ejak | " + to.meta.title || 'Bang Ejak'
})

export default router
