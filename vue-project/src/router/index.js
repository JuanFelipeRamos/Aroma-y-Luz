import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NavbarLogoYTexto from '@/components/NavbarLogoYTexto.vue'
import Contacto from '@/views/Contacto.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'
import Footer from '@/components/Footer.vue'
import TargetaProducto from '@/components/TargetaProducto.vue'
import ComoSurgimos from '@/components/ComoSurgimos.vue'

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

    {
      path: '/Footer',
      name: 'footer',
      component: Footer,
    },

    {
      path: '/TargetaProducto',
      name: 'targetaproducto',
      component: TargetaProducto,
      props: true
    },

    {
      path: '/ComoSurgimos',
      name: 'comosurgimos',
      component: ComoSurgimos,
      props: true
    },

  ],
})

export default router
