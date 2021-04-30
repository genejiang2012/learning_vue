/*
 * @Author: Gene Jiang
 * @Date: 2021-04-29 14:44:20
 * @LastEditors: Gene Jiang
 * @LastEditTime: 2021-04-30 15:58:49
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/', 
      name: 'example01', 
      component: example_01
    }

  ]
})
