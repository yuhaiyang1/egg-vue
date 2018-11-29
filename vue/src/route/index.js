import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]
export default new VueRouter({
  routes 
})