import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';

//引入ajax请求axios模块
import axios from "axios"
//默认请求服务器基础路径----http://176.221.15.50:5050
axios.defaults.baseURL="http://elbbe.applinzi.com"
// axios.defaults.baseURL="http://192.168.1.3:5050"
//发送请求时将session信息发送服务器
axios.defaults.withCredentials=true
//将axios注册Vue对象属性
Vue.prototype.axios=axios
//引入mint-ui组件库
import MintUI from "../node_modules/mint-ui"
//将Vue-touch引入
import VueTouch from 'vue-touch'
//better-scroll引入
// import BScroll from 'better-scroll'
//将mint-ui样式文件单独引入
import "mint-ui/lib/style.css"
Vue.use(VueTouch,{name:'v-touch'})
Vue.use(Vant);
//将mint-ui对象注册
Vue.use(MintUI);
// Vue.use(BScroll)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
