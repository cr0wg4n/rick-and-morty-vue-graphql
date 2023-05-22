import { createRouter, createWebHistory } from "vue-router"
import CharacterView from '../views/CharacterView.vue'
import Index from '../views/IndexView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/:id(\\d+)',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/error',
      name: 'error',
      component: NotFound
    },
    {
      path: '/:catch(.*)',
      redirect: '/error'
    }
  ]
})

export default router