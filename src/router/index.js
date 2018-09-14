import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Repositories from '@/components/pages/Repositories'
import Followers from '@/components/pages/Followers'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repositories
    },
    {
      path: '/followers',
      name: 'Followers',
      component: Followers
    }
  ]
})
