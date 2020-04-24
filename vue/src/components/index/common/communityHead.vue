<template>
  <div>
    <!-- 顶部栏 -->
    <div class="sousuolan">
      <!-- 搜索框 -->
      <h4>社 区</h4>
    </div>
    <div class="tobu">
      <van-tabs v-model="active" swipeable animated>
        <van-tab title="点评">
          <!-- <communitytuijian></communitytuijian> -->
          <communityuserone></communityuserone>
        </van-tab>
        <van-tab title="美食">
          <indexProduct></indexProduct>
        </van-tab>
        <van-tab title="旅游" disabled>待开发</van-tab>
        <van-tab title="购物" disabled>待开发</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import communityuserone from "./communityuserone"; //分享
import indexProduct from "./indexProduct"; //美食页面

export default {
  components: {
    communityuserone: communityuserone, //好友分享
    indexProduct: indexProduct //美食店铺页面
  },
  data() {
    return {
      active: 1
      // selected: "tuijian"
    };
  }
  // mounted() {
  //   window.addEventListener("scroll", this.communtityhead, true);
  // },
};
</script>
 <style scoped>
/* 顶部搜素栏 */
.sousuolan {
  width: 100%;
  height: 4.375rem;
  position: fixed;
  margin: 0;
  background-image: linear-gradient(#ff3838, #ff5e5e);
  z-index: 999;
}
.sousuolan h4 {
  height: 2.5rem;
  line-height: 4.375rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
}
.tobu {
  padding-top: 4.375rem;
}
.shequnvabar .mint-navbar .mint-tab-item {
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
  color: #000 !important;
}
.shequnvabarxuanxiang {
  width: 100%;
}
.shequnvabar .mint-navbar .mint-tab-item .shequnvabarxuanxiangone {
  font-size: 1rem !important;
}
.shequnvabar .mint-navbar .is-selected {
  border-bottom: 0.125rem solid #d90d19;
}
.shequnvabar .mint-navbar .is-selected .shequnvabarxuanxiangone {
  color: #d90d19;
}
</style> 