<template>
  <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(img,index) in imgs" :key="index">
          <a :href="img.url">
            <img :src="img.img">
          </a>
        </mt-swipe-item>
      </mt-swipe>

      <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图文分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div></a></li>
            </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        imgs:[],
      }
    },
    created(){
      this.$ajax.get('getlunbo')
      .then(res=>{
         this.imgs = res.data.message;
      })
      .catch(err=>{
        console.log('轮播图获取失败',err);
      })
    }
  }
</script>
<style>
  .mint-swipe{
    height: 200px;
  }
  .mint-swipe img{
    height: 200px;
    width: 100%;
  }
</style>