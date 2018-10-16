import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const Login = resolve => require(['./components/Login'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登陆',
      component: Login
    }
  ]
})
