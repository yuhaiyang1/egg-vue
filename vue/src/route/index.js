import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../components/login.vue'
import Home from '../components/home.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]
const router =  new VueRouter({
  routes 
})
router.beforeEach((to, from, next) => {
  console.log(store.state.user.userInfo.id, from, to)
    if (store.state.user.userInfo.id ) {   //判断是否已经登录
      next();
    } else if(to.path !== '/login'){
      next({
        path: '/login',
        // query: {redirect: to.fullPath}   //登录成功后重定向到当前页面
      });
    } else {
      next()
    }
})
export default router