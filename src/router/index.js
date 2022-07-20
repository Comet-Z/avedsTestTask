import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
// import HomeView from '../views/HomeView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     // component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     // component: () => import()
//   }
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/MainPage.vue')},
    { path: '/contacts', component: () => import('../views/ContactsPage.vue'), meta: { requiresAuth: false }},
    { 
      path: '/user', 
      component: () => import('../views/UserPage.vue'),
      meta: {
        requiresAuth: true
      }
    },

  
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next()
    }
    else {
      alert('У Вас нету доступа к этой странице!')
      next('/')
    }
  }
  else {
    next()
  }
})
export default router
