import { createRouter, createWebHistory } from "vue-router"
import CharacterView from '../views/CharacterView.vue'
import Index from '../views/IndexView.vue'
import NotFound from '@/views/NotFound.vue'
import DemoView from '@/views/DemoView/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      beforeEnter: (to, from) => {
        return true
      },
    },
    {
      path: '/:id(\\d+)',
      name: 'character',
      component: CharacterView,
      beforeEnter: (to, from) => {
        // accept navigation (it only aplies with direct enter, not router.push)
        console.log('enter to guard')
        if(to.params.id === '10') {
          return { ...to, params: { id: '11' }}
        }
        return true
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('@/views/PlayView/IndexView.vue'),
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

router.beforeEach((to, from)=>{
  console.log(to, from)
  return true
})


export default router