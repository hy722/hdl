<template>
  <div class="orderallall" v-if="this.nnm">
    <div class="orderallone" v-for="(item,index) of oneOrderList" :key="index">
      <div @click="orderProdu" class="orderallonehead">
        <img :src="cc(item.ologo)" alt />
        <div class="orderalloneheadhead">
          <div>
            <span>{{item.otitle}}></span>
            <span>已完成</span>
          </div>
        </div>
      </div>
      <div class="orderalloneimg">
        <div class="orderalloneimgone">
          <div>
            <img :src="cc(item.img || '').split(',')[0]" alt />
          </div>
        </div>
        <div class="orderalloneimgpic">
          <div>
            <span>下单时间:{{item.time}}</span>
            <span>总价:￥{{item.price}}</span>
          </div>
          <div class="orderallonebtn">
            <div @click="orderProdu" class="zlyd">
              <span>再来一单</span>
            </div>
            <div @click="pingMoreblock" class="pingjia">
              <span>评价</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 评价界面 -->
    <mt-popup class="sharePingMore" v-model="pingjiaVisible" position="bottom">
      <pingjia :pingMroeNone="pingMroeNone"></pingjia>
    </mt-popup>
  </div>
</template>
<script>
import pingjiaOne from "./pingjia1.vue";
import { orderOneList } from "../../../api/orderOne.js";
import {getURL} from "../../../api/url.js";
export default {
  data() {
    return {
      oneOrderList: [""],
      pno1: 0,
      itemOrderList: [""],
      pingjiaVisible: false,
      nnm: false,
      cc:{}
    };
  },
  components: {
    pingjia: pingjiaOne
  },
  created() {
    this.cc=getURL;
    this.orderOneMore();
  },
  methods: {
    //显示隐藏评价界面
    pingMoreblock() {
      // this.pingjiaVisible=true;
      //  console.log("1");
      this.$router.push({ path: "/pingjia" });
    },
    pingMroeNone() {
      this.pingjiaVisible = false;
    },
    orderProdu() {
      this.$router.push("/Produ");
    },
    //调用查询订单详情接口
    orderOneMore() {
      this.pno1++;
      let pno = this.pno1;
      orderOneList(pno).then(data => {
        if (data == -1) {
          return;
        } else {
          this.oneOrderList = data;
          this.nnm = true;
          // console.log(this.oneOrderList);
          // console.log((this.oneOrderList[0].img || "").split(",")[0]);
        }

        //console.log(data);
      });
    }
  }
};
</script>
 <style scoped>
/*评价界面 */
.sharePingMore {
  width: 100%;
  height: 100vh;
}
/* 卡片 */
.orderallall {
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3.4375rem;
}
.orderallone {
  padding-top: 1rem;
  margin: 0.375rem 0rem;
  background: #fff;
  border-radius: 0.9375rem;
}
.orderallonehead {
  padding-left: 1rem;
  padding-right: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  border-bottom: 0.0625rem solid #4040401a;
  display: flex;
  padding-bottom: 0.375rem;
}
/* 店铺小图标 */
.orderallonehead > img {
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
}
/* 店铺名称 */
.orderalloneheadhead span {
  display: inline-block;
  font-size: 0.9375rem;
  font-weight: 500;
}
/* 已完成 */
.orderalloneheadhead span ~ span {
  color: #000000;
  float: right;
  font-weight: 200;
}

.orderalloneheadhead {
  width: 100%;
  margin-left: 0.5rem;
}
.orderalloneimg {
  display: flex;
  overflow-y: hidden;
  white-space: nowrap;
  margin: 0.625rem 0 0.3125rem;
  position: relative;
}
.orderalloneimg::-webkit-scrollbar {
  display: none;
}
.orderalloneimgone {
  height: 6.25rem;
  border-radius: 0.3125rem;
}
.orderalloneimgone {
  margin-left: 0.8rem;
}
.orderalloneimgone > div {
  overflow: hidden;
  width: 5.625rem;
}
.orderalloneimgone img {
  height: 4.0625rem;
  width: 4.6875rem;
}
.orderalloneimgpic span {
  font-size: 0.9rem;
  height: 1.875rem;
  line-height: 1.875rem;
  display: block;
}
.orderallonebtn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  float: right;
  position: absolute;
  bottom: 0.375rem;
  right: 0.4375rem;
}
.orderallonebtn div {
  border: 1px solid #ccc;
  color: #999;
  padding: 0.3rem;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  text-align: center;
  border-radius: 0.625rem;
}
.orderallonebtn div span {
  height: 1.125rem;
  line-height: 1.25rem;
  font-size: 0.8125rem;
  width: 3.75rem;
}
.orderallonebtn div ~ div {
  border: 0;
  margin-right: 0;
  color: #fff;
  background-color: #d90d19;
}
</style> 