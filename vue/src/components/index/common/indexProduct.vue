<template>
  <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :bottom-distance="2" :auto-fill="false">
  <!-- 没有数据就隐藏 -->
  <div class="product" v-show="this.nnm"> 
    <!-- <h4>热卖店铺</h4> -->
    <div class="dianpu" @click="indexProdu" v-for="(item,index) of blist" :key="index">
      <div class="tupian">
        <!-- <img :src="'http://127.0.0.1:5050/'+item.blogo" alt /> -->
        <img :src="cc(item.blogo)" alt="">
        <p>{{item.ctitle}}</p>
      </div>
      <div class="wenzi">
        <h4>{{item.dname}}</h4>
        <span class="fenshu">{{item.grade}}分</span>
        <span class="ziqu">支持自取</span>
        <div class="jianman">
          <span>10减8</span>
          <span>35减10</span>
          <span>50减20</span>
        </div>
        <h5>月销量{{item.bdiscounts}}</h5>
      </div>
    </div>    
  </div>
 </mt-loadmore>
 
</template>
<script>
import { dlyz } from "../../../api/dlpz.js";
import { businessOne } from "../../../api/businessOne.js";
import {getURL} from "../../../api/url.js";
export default {
  data() {
    return {
      blist: [],
      pno: 0,
      nnm: false,
      allLoaded:false,
      cc:{},
    };
  },
  created() {
    this.businssMore();
    this.cc=getURL;
  },
  methods: {
    businssMore() {
      this.pno++;
      var pno = this.pno;
      businessOne(pno).then(data => {
        this.blist =this.blist.concat(data);

        this.nnm = true;
      });
    },
     loadBottom(){
         this.businssMore();
         console.log("调用一次")
           this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
    indexProdu() {
      dlyz().then(data => {
        if (data == -1) {
           this.$router.push("/login");
            this.$toast("登录后才可以点餐偶")
        } else {
          this.$router.push("/Produ");
        }
      });
    }
  }
};
</script>
 <style scoped>
/* 整体 */
.product {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0.3125rem 1rem;
}
/* 店铺信息 */
.dianpu {
  height: 13.625rem;
  width: 48%;
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0.3125rem 0.3125rem 1.125rem #cccccc69;
  background-color: #fff;
  margin-bottom: 0.9375rem;
}
/* 商家图片div */
.tupian {
  height: 6.4375rem;
  width: 100%;
  position: relative;
}
/* 商家图片 */
.tupian img {
  width: 100%;
  height: 100%;
}
/* 图片中的文字 */
.tupian > p {
  position: absolute;
  bottom: 0.3125rem;
  left: 50%;
  width: 70%;
  text-align: center;
  font-size: 0.8125rem;
  background-color: #ff4e4ead;
  transform: translate(-50%, 0);
  color: #fff;
  border-radius: 0.3125rem;
}
/* 文字卡片 */
.wenzi {
  padding: 0.5rem;
}
/* 店铺名称 */
.wenzi > h4 {
  font-size: 0.9375rem;
  line-height: 1.4375rem;
  font-weight: 800;
  height: 1.4375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 10em;
  margin: 0;
}
/* 分数 */
.fenshu {
  font-size: 0.875rem;
  color: #ff2525;
  font-weight: 800;
}
/* 支持自取 */
.ziqu {
  font-size: 0.75rem;
  margin-left: 0.3125rem;
  color: #646464;
}
/* 满减 */
.jianman span {
  width: 2.5rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.5625rem;
  display: inline-block;
  background-color: #ff9a87ab;
  border: 1px solid #ff7575;
  color: #ff0303;
  margin: 0 0.125rem;
  border-radius: 0.3125rem;
  text-align: center;
}
/* 销量 */
.wenzi > h5 {
  font-size: 0.75rem;
  color: #757575;
  height: 1.875rem;
  line-height: 1.875rem;
  font-weight: 400;
}
</style> 
