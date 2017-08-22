import Vue from "vue";
import App from "./App.vue";
import Home from './components/home/Home.vue';
import Vip from './components/vip/Vip.vue';
import Shopcart from './components/shopcart/Shopcart.vue';
import Search from './components/search/Search.vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
import './static/libs/mui-master/dist/css/mui.css';
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  routes:[
      {path:'/',redirect:{name:'home'}},
      {name:'home',path:'/home',component:Home},
      {name:'vip',path:'/vip',component:Vip},
      {name:'shopcart',path:'/shopcart',component:Shopcart},
      {name:'search',path:'/search',component:Search},
  ]
})  
import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
new Vue({
  el:'#app',
  router,
  render:c=>c(App)
})