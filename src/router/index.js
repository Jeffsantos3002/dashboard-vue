import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/HomeIndex.vue')
const Credencials = () => import('@/views/Credentials/CredentialsIndex.vue')
const Feedbacks = () => import('@/views/Feedback/FeedbacksIndex.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/credencials',
    name: 'Credentials',
    component: Credencials,
    meta: {
      hasAuth: true
    }

  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }

  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
