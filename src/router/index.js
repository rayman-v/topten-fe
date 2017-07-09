import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list/bdhotnews'
    }, {
      path: '/list/:keyword',
      name: 'list',
      component: List
    }
  ]
})
