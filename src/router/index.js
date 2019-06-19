import Vue from 'vue'
import Router from 'vue-router'
import slides from '@/components/slides'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slides',
      component: slides

    }
  ]
})
