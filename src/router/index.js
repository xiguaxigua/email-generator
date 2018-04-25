import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '配置页面',
      component: () => import('@/pages/set-detail')
    },
    {
      path: '/convert',
      name: 'JSONToHTML',
      component: () => import('@/pages/json-to-html')
    }
  ]
})
