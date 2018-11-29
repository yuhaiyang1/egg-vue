import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './route'
import store from './store'

Vue.use(ElementUI);
console.log(router, 'roure')
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})