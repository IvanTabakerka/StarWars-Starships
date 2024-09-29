import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/ships/',
      component: () => import('../views/Ships.vue'),
      meta: {
        title: 'Ships'
      }
    },
    {
      path: '/ships/:id/',
      component: () => import('../views/ShipsDetail.vue'),
      meta: {
        title: 'Loading..'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/Error404.vue'),
      meta: {
        title: '404'
      }
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = <string>to.meta?.title ?? 'Starships'
})

export default router
