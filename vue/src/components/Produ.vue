
<template>
  <div class="container">
    <!-- 头 -->
    <div class="searchc">
      <header>
        <h1>菜谱</h1>
        <div id="toggle-menu" class="header-button" @click="fhsymore">
          <img src="/img/fanhui.png" />
        </div>
        <div id="toggle-basket" class="header-button">
          <img @click="f1()" src="/img/gouwuche.png" />
        </div>
        <!-- 搜索 -->
        <div @click="searchOne" id="toggle-search" class="header-button">
          <img src="/img/sousuo.png" />
        </div>
        <form id="search-form" action>
          <fieldset>
            <input class="searchPP" name="search-terms" type="search" placeholder="请输入搜索内容" />
          </fieldset>
          <input @click="searchtwo" type="submit" value="确定" />
        </form>
      </header>
      <div class="main"></div>
    </div>
    <!-- 左侧选项 -->
    <ul class="left">
      <li>热卖</li>
      <li @click="one">自选锅底</li>
      <li @click="two">自选酱料</li>
      <li @click="three">自选蔬菜</li>
      <li @click="four">自选荤菜</li>
      <li @click="five">米饭口味</li>
      <li @click="six">酒水饮料</li>
    </ul>
    <!-- 右侧菜品项 -->
    <div class="right" id="right">
      <!-- 商品详情 -->
      <div class="add product1" id="product1" v-for="(item,i) of list" :key="i">
        <!-- <span>{{item.pname}}</span> -->
        <ul class="product">
          <li>
            <img :src="cc(item.pimg)" alt />
          </li>

          <li class="wenz">
            <p>{{item.pname}}</p>
            <p>月售：{{item.restrictCount}}</p>
            <p>约{{item.pweight}}克</p>
          </li>
        </ul>

        <div class="pricee">
          <div class="priceAdd">
            <div>
              <span class="jinq">￥</span>
              <span class="pricez" id="price">{{item.price}}</span>
              <span class="pricex">￥{{item.discount}}</span>
            </div>
            <div class="num">
              <img
                class="jiaa"
                :data-pid="item.pid"
                :data-price="item.price"
                :data-pname="item.pname"
                :data-pimg="item.pimg"
                :data-pweight="item.pweight"
                :data-bid="item.bid"
                :data-count="item.productCount"
                id="jia"
                @click="addCart"
                src="../assets/produ_img/hdl_jia.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div style="width:100%;height:40px;"></div>

      <!-- 下端内容 -->

      <!-- 页尾 -->
      <div class="bottom">
        <div class="bottom1">
          <div class="bottoma">
            <img class="bottom1-img" src="../assets/produ_img/hdl_gouwuc2 .png" />
          </div>
          <div @click="f1()" class="bottomc">
            <span class="bottom1-span" id="totalpriceshow">￥{{totalCartPrice}}</span>
            <span></span>
          </div>
          <div class="bottom1-2">￥20起送</div>
        </div>
      </div>
    </div>

    <mt-popup class="sharePopup" v-model="popupVisible" position="bottom">
      <!-- 小购物车 -->
      <div class="gouwuc">
        <div class="top">
          <span>购物车</span>
          <span @click="emptyCartUser">清空购物车</span>
        </div>
        <div class="center" v-for="(item,index) of userListCart" :key="index">
          <div class="center1">
            <span>{{item.ctitle}}</span>
          </div>
          <div class="center2">
            <span>￥{{item.cprice}}</span>
            <img
              @click="subCount"
              :data-cid="item.cid"
              :data-pid="item.pid"
              :data-count="item.count"
              class="jianjian"
              src="../assets/produ_img/hdl_jian.png"
            />
            <span class="span1">{{item.count}}</span>
            <img
              @click="addUsercounts"
              :data-pid="item.pid"
              :data-count="item.count"
              class="jia"
              src="../assets/produ_img/hdl_jia.png"
            />
          </div>
        </div>
        <div class="topbottom"></div>
        <div class="bottom1" @click="f2()">
          <div class="bottoma">
            <img class="bottom1-img" src="../assets/produ_img/hdl_gouwuc1.png" />
          </div>
          <div class="bottomc">
            <span class="bottom1-span" id="totalpriceshow">￥{{totalCartPrice}}</span>
            <span></span>
          </div>
          <div class="bottom1-3" @click="payBolck1">去结算</div>
        </div>
      </div>
    </mt-popup>
    <!-- 支付界面 -->
    <mt-popup class="sharePaymoney" v-model="payVisible" position="bottom">
      <paymoney :payNone="payNone" :msg="totalPay" :emptyCartUser="emptyCartUser"></paymoney>
    </mt-popup>
  </div>
</template>
<script>
//引入ajax请求
import { Produ } from "../api/Produ.js";
import { productAddCartOne } from "../api/productAddCartOne.js";
import { cartDeleteOne } from "../api/delItemCartyDeleteOne.js";
import { selectCartUser } from "../api/findcartOneSelect.js";
import { upcountUserCartOne } from "../api/upcountCartOne.js";
import { emptyCartOne } from "../api/delItemAllCartQkOne.js";
//引入支付界面
import paymoney from "./index/common/paymoney.vue";
import {getURL} from '../api/url.js'
export default {
  data() {
    return {
      // 购物车初始隐藏
      popupVisible: false,
      // counter: 0,
      list: [""],
      pno: 0,
      userListCart: [""],
      //支付界面初始隐藏
      payVisible: false,
      totalPay: 0,
      cc:{}
    };
  },
  components: {
    paymoney: paymoney
  },
  created() {
    this.cc=getURL;
    this.productMore();
    this.selectUserCartMore();
  },
  methods: {
    //清空购物车
    emptyCartUser() {
      //当前用户所有的商品信息的id
      var cids = "";
      for (var item of this.userListCart) {
        cids += item.cid + ",";
      }
      console.log(cids.slice(0, cids.length - 1));
      emptyCartOne(cids.slice(0, cids.length - 1)).then(data => {
        if (data == 1) {
          //console.log("清空成功");
          this.selectUserCartMore();
        }
      });
    },
    //弹出支付界面
    payBolck1() {
      if (this.userListCart.length > 0) {
        this.payVisible = true;
      } else {
        this.$messagebox("提示消息", "你的购物车中没有物品");
      }
    },
    payNone() {
      this.payVisible = false;
    },
    //减少购物车的数量
    subCount(e) {
      let pid = e.target.dataset.pid;
      let cid = e.target.dataset.cid;
      let count = parseInt(e.target.dataset.count);
      if (count > 1) {
        count--;
        //    return;
      } else {
        cartDeleteOne(cid).then(data => {
          if (data == 1) {
            console.log("删除成功");
            this.selectUserCartMore();
          }
        });
      }
      upcountUserCartOne(pid, count).then(data => {
        console.log(data);
        if (data == 1) {
          // this.$toast("减少成功");
          this.selectUserCartMore();
        } else if (data == 0) {
          this.$toast("减少失败");
        }
      });
    },
    //增加购物车的数量
    addUsercounts(e) {
      let pid = e.target.dataset.pid;
      let count = 1;
      if (count <= 10) {
        count += parseInt(e.target.dataset.count);
      } else {
        return;
      }
      //console.log(pid,count)
      upcountUserCartOne(pid, count).then(data => {
        //console.log(data);
        if (data == 1) {
          // this.$toast("增加成功");
          this.selectUserCartMore();
        } else if (data == 0) {
          this.$toast("增加失败");
        }
      });
    },
    //查询个人购物车
    selectUserCartMore() {
      selectCartUser().then(data => {
        this.userListCart = data;
        //console.log(data);
      });
    },
    addCart(e) {
      //添加购物车
      //  1.在参数中添加属性event
      //  2.获取三个参数
      let pid = e.target.dataset.pid,
        price = e.target.dataset.price,
        pname = e.target.dataset.pname,
        pimg = e.target.dataset.pimg,
        pweight = e.target.dataset.pweight;
      console.log(pid, price, pname, pimg, pweight);
      //  3.发送ajax请求
      productAddCartOne(pid, pname, price, pimg, pweight).then(data => {
        // console.log(data);
        if (data == 1) {
          if (this.list[pid - 1].productCount < 5) {
            this.list[pid - 1].productCount++;
            // this.addCart();
          } else {
            this.$messagebox(
              "提示消息",
              "购买数量以是最大数量，不能在购买此商品"
            );
          }
          this.selectUserCartMore();
        }
      });
    },
    //动态添加商品详情信息
    productMore() {
      this.pno++;
      let pno = this.pno;
      Produ(pno).then(data => {
        let rows = data;
        this.list = rows;
      });
    },
    //返回首页
    fhsymore() {
      this.$router.push("/");
    },
    // 弹出购物车
    f1() {
      this.popupVisible = true;
      this.selectUserCartMore();
    },
    f2() {
      this.popupVisible = false;
    },
    // 自选锅底点击事件
    one() {
      // 滚动事件
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      window.scrollTo(0, -5);
    },
    two() {
      // 滚动事件
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      window.scrollTo(0, 470);
    },
    three() {
      // 滚动事件
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      window.scrollTo(0, 620);
    },
    four() {
      // 滚动事件
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      window.scrollTo(0, 2110);
    },
    five() {
      // 滚动事件
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      window.scrollTo(0, 3700);
    },
    six() {
      // 滚动事件
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      window.scrollTo(0, 4000);
    },
    // 页面按钮+
    jia(i) {
      //  for(var item of this.list){
      //    if(item.productCount<10){
      //       item.productCount++
      //    }
      //  }
      if (this.list[i].productCount < 10) {
        this.list[i].productCount++;
        // this.addCart();
      } else {
        this.$messagebox("提示消息", "购买数量以是最大数量，不能在购买此商品");
      }
    },
    // 页面按钮-
    jian(i) {
      this.list[i].productCount--;
      if (this.list[i].productCount < 1) {
        this.list[i].productCount = 0;
      }
    },
    searchOne() {
      $("#search-form, #toggle-search").toggleClass("open");
      return false;
    },
    searchtwo() {
      $("#search-form, #toggle-search").toggleClass("open");
      return true;
    }
  },
  // 购物车价格计算
  computed: {
    totalprice() {
      let totalprice = 0;
      for (let i = 0; i < this.list.length; i++) {
        totalprice += this.list[i].price * this.list[i].productCount;
        // totalprice=totalprice.toFixed(2);
      }
      return totalprice;
    },
    totalCartPrice() {
      let sum = 0;
      for (var item of this.userListCart) {
        sum += parseFloat(item.cprice) * parseInt(item.count);
      }
      this.totalPay = sum.toFixed(2);
      return sum.toFixed(2);
    }
  }
};
</script>
 <style scoped>
/* 清楚样式 */
* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* 去圆点 */
ul > li {
  list-style: none;
  float: left;
  width: 6.25rem;
  /* margin-left: 0.9375rem;
     */
}
/* 父元素container */
.container {
  width: 100%;
  display: flex;
  /*靠左*/
  justify-content: space-between;
  /*靠右*/
}
.right {
  /*右边 */
  width: 100%;
  background: #fff;
  padding: 4.375rem 1.125rem 0 0;
}
.left {
  width: 30%;
  text-align: left;
  height: 100%;
  background: #f5f5f5;
  position: fixed;
  margin-top: 16%;
}
/* 导航栏 */
.left > li {
  height: 3.75rem;
  line-height: 3.75rem;
  padding-left: 0.8125rem;
}
/* 图片属性 */
.right img {
  width: 6.25rem;
  border-radius: 0.8125rem;
  height: 4.375rem;
}
.product > .wenz {
  margin-left: 0.625rem;
}
/* 菜品名字 */
.wenz p:nth-of-type(1) {
  font-size: 1rem;
  font-weight: 600;
}
/* 菜品销售量 */
.wenz p:nth-of-type(2) {
  font-size: 0.75rem;
}
.pricee {
  display: table;
  width: 7.5rem;
}
.wenz p:nth-of-type(3) {
  font-size: 0.75rem;
}
/* 实际价格属性 */
.pricez {
  font-size: 1.25rem;
  /*字体大小 */
  font-weight: bolder;
  /*字体加粗 */
  color: #f84e43;
}
/* 打折前价格 */
.pricex {
  font-size: 0.625rem;
  text-decoration: line-through;
  /*贯穿线 */
  color: #7d7d7dd1;
}
/* 商品详情 */
.product {
  height: 3.125rem;
  margin-left: 34%;
}
.add {
  /* 商品间距 */
  margin-bottom: 1.25rem;
}
/* 下面页脚 */
.bottom1 {
  /* 宽高 */
  width: 100%;
  height: 3.125rem;
  /* 背景 */
  background: #141d27;
  /* 居中 */
  text-align: center;
  /* 靠左 */
  display: flex;
  /* 靠右 */
  justify-content: space-between;
  /* 定位 */
  position: fixed;
  bottom: 0;
}
.bottomc {
  /* 靠左 */
  display: flex;
  /* 靠右 */
  justify-content: space-between;
  width: 65%;
}
/* 购物车图片 */
.bottom1 .bottom1-img {
  /* 背景 */
  background-color: rgb(0, 0, 0, 0.2);
  /* 文字大小 */
  font-size: 0.8rem;
  /* 文字颜色 */
  color: rgb(255, 255, 255, 0.4);
  /* 图片圆角 */
  border-radius: 50%;
  /* 图片宽高 */
  width: 3.125rem;
  height: 3.125rem;
  /* 左外边距 */
  margin-left: 0.625rem;
}
/* 结算价格 */
.bottom1 .bottom1-span {
  /* 字体大小 */
  font-size: 0.8rem;
  /* 文字颜色 */
  color: rgb(255, 255, 255);
  /* 高 */
  line-height: 3rem;
  /* 文字加粗*/
  font-weight: 3.125rem;
}
.bottom1-2 {
  /* 字体大小 */
  font-size: 0.8rem;
  /* 背景 */
  background: #333030;
  /* 字体颜色 */
  color: rgb(255, 255, 255, 0.4);
  /* 文字加粗*/
  font-weight: 3.125rem;
  line-height: 3rem;
  width: 8.125rem;
}
.bottom1-3 {
  /* 字体大小 */
  font-size: 0.8rem;
  /* 背景 */
  background: #1296db;
  /* 字体颜色 */
  color: rgba(242, 158, 7, 0.97);
  /* 文字加粗*/
  font-weight: 3.125rem;
  line-height: 3rem;
  width: 8.125rem;
}
.product25 {
  margin-bottom: 3.125rem;
}
.jinq {
  color: #f84e43;
  font-size: 0.8125rem;
}
/* 页头 */
.searchc {
  position: fixed;
  top: 0;
  width: 100%;
  color: #0b171f;
}
.searchc > header {
  /* *zoom: 1;
     */
  position: relative;
  color: rgb(15, 14, 14);
  background-color: #f5f5f5;
}
.searchc > header:after {
  content: "";
  display: table;
  clear: both;
}
.searchc > header h1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  margin: 0;
  width: 100%;
  line-height: 3.4375rem;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: red;
  font-weight: 700;
}
.header-button {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-indent: -7499.25rem;
  overflow: hidden;
  text-align: left;
  text-transform: capitalize;
  position: relative;
  z-index: 1;
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 99999;
}
#toggle-menu {
  float: left;
  background-position: 0 0;
  /* background-color: #d90d19;
     */
}
#toggle-menu > img,
#toggle-basket > img,
#toggle-search > img {
  width: 1.5625rem;
  height: 1.5625rem;
  display: block;
  margin: 27% auto;
}
#toggle-search {
  float: right;
  background-position: -3.75rem 0;
  /* background: #d90d19;
     */
}
#toggle-search.open:after {
  top: 2.5rem;
}
#toggle-search:after {
  -moz-transition: top, 0.5s;
  -o-transition: top, 0.5s;
  -webkit-transition: top, 0.5s;
  transition: top, 0.5s;
  position: absolute;
  top: 3.25rem;
  left: 50%;
  margin-left: -0.5rem;
  content: "";
  border-color: transparent transparent #e1e4e7;
  border-style: solid;
  border-width: 0.5rem 0.5rem 0.75rem;
}
#toggle-basket {
  position: relative;
  float: right;
  background-position: -7.5rem 0;
  /* background: #d90d19;
     */
}
/* #toggle-basket:before {
     position: absolute;
     top: 0.3125rem;
     left: 0;
     width: 0.125rem;
     height: 3.125rem;
     content: "";
     background-color: #fff;
}
 */
#search-form {
  transition: max-height, 0.5s;
  position: absolute;
  top: 3.75rem;
  margin-left: 7rem;
  left: 0;
  width: calc(100% - 7rem);
  max-height: 0;
  overflow: hidden;
}
#search-form.open {
  max-height: 3.125rem;
  width: 100%;
  background: #ccc;
  height: 3.125rem;
}
#search-form fieldset {
  position: relative;
  margin: 0 3.75rem 0 0;
  padding: 0;
  border: none;
}
#search-form input {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  height: 3.75rem;
}
.searchPP {
  color: #fff;
}
#search-form input[type="search"] {
  width: 100%;
  padding: 0 0.3125rem 0 1.375rem;
  background: #ff0000;
  border: none;
}
#search-form input[type="submit"] {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 3.75rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;
  color: #f0f4f7;
  background: #ff000f;
  border: none;
  cursor: pointer;
}
.sharePaymoney {
  width: 100%;
  height: 100vh;
}
/* 隐藏购物车 */
.top,
.center,
.back {
  /* 弹性布局靠左靠右 */
  display: flex;
  justify-content: space-between;
}
/* 购物车上端 */
.top {
  /* 背景 */
  height: 2.3rem;
  line-height: 2.3rem;
  background: rgb(105, 105, 100, 0.3);
}
/* 上端第一个span */
.top span:nth-child(1) {
  /* 字体大小 */
  font-size: 0.8rem;
  /* 字体加粗 */
  font-weight: 3.125rem;
  /* 颜色 */
  color: rgb(156, 157, 158);
  /* 行高 */
  /* 左外边距 */
  margin-left: 0.625rem;
}
/* 上端第二个span */
.top span:nth-child(2) {
  /* 字体大小 */
  font-size: 0.8rem;
  /* 颜色 */
  color: rgb(0, 160, 220);
  /* 行高 */
  /* 右外边距 */
  margin-right: 0.625rem;
}
/* 中间商品栏 */
.center {
  /* 下边框 */
  border-bottom: 0.0625rem solid rgb(212, 207, 207);
}
.topbottom {
  margin-bottom: 3.125rem;
}
.center > .center1 > span {
  font-size: 0.8rem;
  color: rgb(7, 17, 27);
  line-height: 3rem;
  margin-left: 0.625rem;
}
.center2 span:nth-child(1) {
  font-size: 0.8rem;
  font-weight: normal;
  color: rgb(240, 20, 20);
  line-height: 3rem;
  margin-right: 0.9375rem;
}
.span1 {
  font-size: 0.8rem;
  color: rgb(147, 153, 159);
  line-height: 3rem;
  width: 1.8125rem;
  text-align: center;
  display: inline-block;
}
/* 所有加号减号 */
.num > .jian,
.num > .jiaa {
  /* 大小 */
  width: 0.9375rem;
  height: 0.9375rem;
  float: right;
  margin-top: -1.25rem;
}
.jianjian {
  width: 0.9375rem;
  height: 0.9375rem;
}
/* 商品详情中的数量 */
.spanprice {
  /* 左右外边距 */
  margin: 0 0.3125rem;
}
/* 购物车中的加号 */
.jia {
  /* 右外边距 */
  margin-right: 0.625rem;
  width: 0.9375rem;
  height: 0.9375rem;
}
.sharePopup {
  width: 100%;
  /* 购物车隐藏 */
  /* display: none;
     */
}
</style> 