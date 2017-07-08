import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/views/search'
import List from '@/views/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    }, {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
