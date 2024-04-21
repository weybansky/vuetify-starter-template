/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default.vue'),
//     children: [
//       // {
//       //   path: '',
//       //   name: 'Home',
//       //   // route level code-splitting
//       //   // this generates a separate chunk (Home-[hash].js) for this route
//       //   // which is lazy-loaded when the route is visited.
//       //   component: () => import('@/views/Home.vue'),
//       // },
//     ],
//   },
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  // routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
