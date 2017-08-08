import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import loading from './components/loading'

import stores from './store/'
console.log(stores)


Vue.use(VueRouter)
Vue.use(loading)

/*axsio 的配置*/ /*这个是发送请求有错误报错*/
// axios.interceptors.request.use(function(config){
// 	stores.dispatch('showLoading')
// 	return config;
// }),function(error){
// 	return Promise.reject(error)
// }
/*这个是请求回来*/
// axios.interceptors.response.use(function(){
// 	stores.dispatch('hideLoading')
// 	return response;
// }),function(error){
// 	return Promise.reject(error)
// }
axios.interceptors.request.use(function(config){
		stores.dispatch('showLoading')
		return config
},function(error){
	return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
	stores.dispatch('hideLoading')
	return response;


},function(error){
	return Promise.reject(error)
})
		

Vue.prototype.$http = axios;

const router = new VueRouter({
	mode:'history',
	routes,
	scrollBehavior:()=>({
		y:0
	})

})




require('./assets/css/base.css')

// new Vue({
//   el: '#app',
// router,
//   render: h => h(App)
// })
 var a = new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})

/*这可以strore一定要写对应上我找了半天*/