import { createRouter, createWebHistory } from 'vue-router'
import FormView from '@/views/FormView.vue'
import PreviewData from '@/views/PreviewData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormView
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewData
    },
  ],
})

export default router
