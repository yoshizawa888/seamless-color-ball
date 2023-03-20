import { createRouter, createWebHistory } from 'vue-router'
import Red from '../views/Red.vue';

const routes = [
  {
    path: '/',
    name: 'Red',
    component: Red
  },
  {
    path: '/blue',
    name: 'Blue',
    component: () => import('../views/Blue.vue'),

  },
  {
    path: '/green',
    name: 'Green',
    component: () => import('../views/Green.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router