import Vue from "vue";

//引入组件开始
import App from "./App.vue";
import Home from './components/home/Home.vue';
import Vip from './components/vip/Vip.vue';
import Shopcart from './components/shopcart/Shopcart.vue';
import Search from './components/search/Search.vue';
import NewsList from "./components/news/NewsList.vue";
import NewsDetail from "./components/news/NewsDetail.vue";
import PhotoList from "./components/photo/PhotoList.vue";
import PhotoDetail from "./components/photo/PhotoDetail.vue";
import GoodsList from "./components/goods/GoodsList.vue";
import GoodsDetail from "./components/goods/GoodsDetail.vue";
import GoodsComment from "./components/goods/GoodsComment.vue";
import NotFound from './components/commons/NotFound.vue'
//引入组件结束
//全局组件的操作开始
import NavBar from './components/commons/NavBar.vue';
import Comment from './components/commons/Comment.vue';
import MySwipe from './components/commons/MySwipe.vue';
Vue.component('NavBar',NavBar);
Vue.component('Comment',Comment);
Vue.component('MySwipe',MySwipe);
//全局组件的操作结束

//Moment开始
import Moment from 'moment';
Vue.filter('convertDate',function(value){
  return Moment(value).format('YYYY-MM-DD');
})
//Moment结束

//VuePreview 开始
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
//VuePreview 结束

//MintUi开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi结束

//Mui开始
import './static/libs/mui-master/dist/css/mui.css';
//Mui结束

//引入全局样式
import './static/css/global.css'; 

//VueRouter开始
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  routes:[
      {path:'/',redirect:{name:'home'}},
      {name:'home',path:'/home',component:Home},
      {name:'vip',path:'/vip',component:Vip},
      {name:'shopcart',path:'/shopcart',component:Shopcart},
      {name:'search',path:'/search',component:Search},
      {name:'news.list',path:'/news/list',component:NewsList},
      {name:"news.detail",path:"/news/detail",component:NewsDetail},
      {name:"photo.list",path:"/photo/list",component:PhotoList},
      {name:'photo.detail',path:"/photo/detail/:imgId",component:PhotoDetail},
      {name:'goods.list',path:'/goods/list',component:GoodsList},
      {name:'goods.detail',path:'/goods/detail/:goodsId',component:GoodsDetail},
      {name:'goods.comment',path:'/goods/comment',component:GoodsComment},
      {name:'goods.PhotoDetail',path:'/goods/photo/detail',component:NewsDetail},
      {path:'*',component:NotFound}
  ]
})  
//Vuerouter结束


//Axios开始
import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
//设置loading拦截器 
Axios.interceptors.request.use(config=>{
  MintUi.Indicator.open({
    text:'加载中...',
    spinnerType:'fading-circle'
  });
  return config;
});
//响应拦截器
Axios.interceptors.response.use(response=>{
  MintUi.Indicator.close();
  return response;
})
//Axios结束
new Vue({
  el:'#app',
  router,
  render:c=>c(App)
})