import Vue from 'vue'
import App from './App.vue'

// -------------------UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);


// -------------------router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './router.config.js'
const router=new VueRouter({
	routes
});





new Vue({
  el: '#app',
  // 开启路由
  router,
  // 绑定主模块
  render: h => h(App)
})