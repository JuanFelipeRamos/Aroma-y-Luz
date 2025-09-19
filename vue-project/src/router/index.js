import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NavbarLogoYTexto from '@/components/NavbarLogoYTexto.vue'
import Contacto from '@/views/Contacto.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/NavbarLogoYTexto',
      name: 'navbarlogoytexto',
      component: NavbarLogoYTexto,
      props: true
    },

    {
      path: '/Contacto',
      name: 'contacto',
      component: Contacto,
    },

    {
      path: '/SobreNosotros',
      name: 'sobrenosotros',
      component: SobreNosotros,
      props: true
    },

  ],
})

export default router
