import { createRouter, createWebHistory } from 'vue-router'
import Red from '../views/Red.vue';
import Blue from '../views/Blue.vue';
import Green from '../views/Green.vue';

const routes = [
  {
    path: '/',
    name: 'Red',
    component: Red
  },
  {
    path: '/blue',
    name: 'Blue',
    component: Blue,

  },
  {
    path: '/green',
    name: 'Green',
    component: Green,
  },
]

const router = createRouter({
  history: createWebHistory('/seamless-color-ball/'),
  routes,
})

export default router
