import Vue from 'vue'
import Router from 'vue-router'
import Wheel from '@/components/Wheel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wheel',
      component: Wheel
    }
  ]
})
