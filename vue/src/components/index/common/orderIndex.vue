<template>
  <div class="ordercontent">
    <!-- 顶部栏 -->
    <div class="sousuolan">
      <!-- 搜索框 -->
      <div>
        <img src="/img/b_q.png" alt />
        <span>订单搜索</span>
      </div>
    </div>

    <!-- <div class="communityorderhead">
      <img src alt />
      <span>订单</span>
      <img src="../../../assets/dingdan/head/fangdajing.png" alt />
    </div>-->
    <div class="orderremai">
      <span>热卖推荐</span>
      <div class="orderremaiall">
        <div class="orderremaione">
          <img src="../../../assets/dingdan/remai/dianjia1.jpg" alt />
          <span>海底捞重庆店</span>
          <div>
            <span>重庆人的麻辣</span>
          </div>
        </div>
        <div class="orderremaione">
          <img src="../../../assets/dingdan/remai/dianjia2.jpg" alt />
          <span>商家</span>
          <div>
            <span>重庆人的味道</span>
          </div>
        </div>
        <div class="orderremaione">
          <img src="../../../assets/dingdan/remai/dianjia3.jpg" alt />
          <span>熊猫来</span>
          <div>
            <span>四川的麻辣</span>
          </div>
        </div>
        <div class="orderremaione">
          <img src="../../../assets/dingdan/remai/dianjia4.jpg" alt />
          <span>海底捞重庆店</span>
          <div>
            <span>重庆人的麻辣</span>
          </div>
        </div>
        <div class="orderremaione">
          <img src="../../../assets/dingdan/remai/dianjia5.jpg" alt />
          <span>海底捞重庆店</span>
          <div>
            <span>重庆人的麻辣</span>
          </div>
        </div>
        <div class="orderremaione">
          <img src="../../../assets/dingdan/remai/dianjia6.jpg" alt />
          <span>海底捞重庆店</span>
          <div>
            <span>重庆人的麻辣</span>
          </div>
        </div>
      </div>
    </div>
    <div class="communityorderheadh4">
      <span>我的订单</span>
    </div>
    <div id="weidengluorederbar" class="orderbar">
      <mt-navbar id="orderbar" class="orderbarxuanxiang" v-model="selected">
        <mt-tab-item id="quanbu">
          <div class="orderbarxuanxiangone">全部</div>
        </mt-tab-item>
        <mt-tab-item id="weifukuai">
          <div class="orderbarxuanxiangone">待付款</div>
        </mt-tab-item>
        <mt-tab-item id="tuikuan">
          <div class="orderbarxuanxiangone">退款</div>
        </mt-tab-item>
        <mt-tab-item id="daipingjia">
          <div class="orderbarxuanxiangone">待评价</div>
        </mt-tab-item>
      </mt-navbar>

      <mt-tab-container
        v-show="this.nnm"
        id="orderbarall"
        class="orderbarmianban"
        v-model="selected"
      >
        <!-- 全部 -->
        <mt-tab-container-item id="quanbu">
          <orderallone></orderallone>
        </mt-tab-container-item>
        <!-- 代付款 -->
        <mt-tab-container-item id="weifukuai">
          <orderdaifukuan></orderdaifukuan>
        </mt-tab-container-item>
        <!-- 退款 -->
        <mt-tab-container-item id="tuikuan">
          <ordertuikuan></ordertuikuan>
        </mt-tab-container-item>
        <!-- 待评价 -->
        <mt-tab-container-item id="daipingjia">
          <orderpingjia></orderpingjia>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import orderallone from "./orderallone.vue";
import orderdaifukuan from "./orderdaifukuan.vue";
import ordertuikuan from "./ordertuikuan.vue";
import orderpingjia from "./orderpingjia.vue";
import { denglu } from "../../../api/denglu.js";
export default {
  beforeMount() {
    denglu().then(data => {
      var weidengluorederbar = document.getElementById("weidengluorederbar");
      if (data == -1) {
        this.denglu1 = 0;
      } else {
        this.nnm = true;
      }
      if (this.denglu1 == 0) {
        weidengluorederbar.innerHTML = "";
      }
    });
  },
  components: {
    orderallone: orderallone,
    orderdaifukuan: orderdaifukuan,
    ordertuikuan: ordertuikuan,
    orderpingjia: orderpingjia
  },
  data() {
    return {
      selected: "quanbu",
      denglu1: 1,
      nnm: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.orderhead, true);
  },
  methods: {
    // orderhead() {
    //   if (this.denglu1 == 1) {
    //     var top = Math.floor(
    //       document.body.scrollTop ||
    //         document.documentElement.scrollTop ||
    //         window.pageXOffset
    //     );
    //     var orderbar = document.getElementById("orderbar");
    //     var orderbarall = document.getElementById("orderbarall");
    //     // console.log(top)
    //     if (top < 225) {
    //       orderbar.style.position = "static";
    //       orderbarall.style.paddingTop = "0";
    //     } else {
    //       orderbar.style.top = "3rem";
    //       orderbar.style.position = "fixed";
    //       orderbar.style.zIndex = "999";
    //       orderbarall.style.paddingTop = "2.2rem";
    //     }
    //   }
    // }
  }
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
/* 搜索栏 */
.sousuolan > div {
  height: 2.1875rem;
  background: #fff;
  width: 90%;
  margin: 1.25rem 5%;
  border-radius: 1.25rem;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
}
.sousuolan > div > img,
.sousuolan > div > span {
  display: inline-block;
  height: 0.9375rem;
  line-height: 0.9375rem;
  text-align: center;
  color: #a5a5a5;
  font-size: 0.6875rem;
  margin-right: 0.375rem;
  /* vertical-align: middle;
     */
}
.orderbar >>> .mint-navbar {
  background-color: #f5f5f5;
}
.orderremai {
  margin-left: 1rem;
  padding-top: 4.375rem;
}
.orderremaiall {
  display: flex;
  overflow-y: hidden;
  white-space: nowrap;
}
.orderremaiall::-webkit-scrollbar {
  display: none;
}
.orderremai > span {
  font-weight: bold;
  font-size: 1.5rem;
}
.orderremaione {
  height: 8.75rem;
  text-align: center;
  box-shadow: 0.1875rem 0.1875rem 0.3125rem #f0f0f0;
  border-radius: 1rem;
  padding: 0.8rem;
}
.orderremaione ~ .orderremaione {
  margin-left: 1rem;
}
.orderremaione > span {
  display: block;
  padding-bottom: 0.5rem;
}
.orderremaione img {
  width: 3.75rem;
  margin-left: 1.6875rem;
  margin-right: 1.6875rem;
}
.orderremaione > div {
  border: 1px solid #d90d19;
  margin: 0 auto;
  width: 70%;
}
.orderremaione > div > span {
  font-size: 0.5rem;
  color: #d90d19;
}
/* .communityorderhead {
     display: flex;
     width: 100%;
     position: fixed;
     justify-content: space-between;
     padding-left: 1rem;
     padding-right: 1rem;
     padding-top: 0.8rem;
     padding-bottom: 0.8rem;
     height: 3rem;
     background: #fff;
     z-index: 999;
}
 .communityorderhead img {
     width: 1.5rem;
     height: 1.5rem;
}
 .communityorderhead span {
     font-size: 1.2rem;
     font-weight: bold;
}
 */
.communityorderheadh4 {
  margin-left: 1rem;
  margin-top: 0.8rem;
  font-weight: bold;
  font-size: 1.5rem;
}
.orderbar .mint-navbar .mint-tab-item {
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
  color: #000 !important;
}
.orderbarxuanxiang {
  width: 100%;
}
.orderbar .mint-navbar .mint-tab-item .orderbarxuanxiangone {
  font-size: 1rem !important;
}
.orderbar .mint-navbar .is-selected {
  border-bottom: 0.125rem solid #d90d19;
}
.orderbar .mint-navbar .is-selected .orderbarxuanxiangone {
  color: #d90d19;
}
</style> 