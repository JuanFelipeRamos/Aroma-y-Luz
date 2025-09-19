import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/Navbar',
      name: 'navbar',
      component: NavbarComponent,
      props: true
    },

  ],
})

export default router
