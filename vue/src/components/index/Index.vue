<template>
  <div>
    <div class="minban">
      <!--面板 -->
      <mt-tab-container v-model="active" class="page-tabbar-container">
        <!-- 首页 -->
        <mt-tab-container-item class="minabn" id="shouye">
          <indexhead
            :infocused="hearImage"
            :imgurlyouxiang="require('../../assets/index/head/youxiang.png')"
            :imgurlyouxiang1="require('../../assets/index/head/youxiang1.png')"
            :imgurlerji="require('../../assets/index/head/erji.png')"
            :imgurlerji1="require('../../assets/index/head/erji1.png')"
            :imgurljia="require('../../assets/index/head/jia.png')"
            :imgurljia1="require('../../assets/index/head/jia1.png')"
          ></indexhead>
          <indexchoice
            :inchoisc="choiceImage"
            :choiseimg="require('../../assets/index/choice/2020.png')"
            :choiseimg1="require('../../assets/index/choice/shu.png')"
          ></indexchoice>
          <!-- 轮播图暂时无用 -->
          <!-- <indexslideshow v-show="this.nnm"></indexslideshow> -->
          <indexproduct v-show="this.nnm"></indexproduct>
          <!-- <indexactive v-show="this.nnm"></indexactive> -->
        </mt-tab-container-item>

        <!-- 我的 -->
        <mt-tab-container-item class="mianbn" id="me">
          <mineheadbar></mineheadbar>
          <minehomepage></minehomepage>
        </mt-tab-container-item>
        <!-- 社区 -->
        <mt-tab-container-item class="mianbn" id="shequ">
          <communityhead></communityhead>
        </mt-tab-container-item>
        <!-- 订单 -->
        <mt-tab-container-item class="mianbn" id="dingdan">
          <orderindex></orderindex>
        </mt-tab-container-item>
      </mt-tab-container>

      <!--底部导航条 -->
      <mt-tabbar fixed v-model="active">
        <mt-tab-item id="shouye" @click.native="changeState(0)">
          <tabbaricon
            slot="icon"
            :focused="currentIdx[0].isSelect"
            :selectedImage="require('../../assets/index/bon/shouyeH.png')"
            :normalImage="require('../../assets/index/bon/shouye.png')"
          ></tabbaricon>首 页
        </mt-tab-item>
        <mt-tab-item id="shequ" @click.native="changeState(1)">
          <tabbaricon
            slot="icon"
            :focused="currentIdx[1].isSelect"
            :selectedImage="require('../../assets/index/bon/shequh.png')"
            :normalImage="require('../../assets/index/bon/shequ.png')"
          ></tabbaricon>社 区
        </mt-tab-item>
        <mt-tab-item id="dingdan" @click.native="changeState(2)">
          <tabbaricon
            slot="icon"
            :focused="currentIdx[2].isSelect"
            :selectedImage="require('../../assets/index/bon/dingdanH.png')"
            :normalImage="require('../../assets/index/bon/dingdan.png')"
          ></tabbaricon>订 单
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
            slot="icon"
            :focused="currentIdx[3].isSelect"
            :selectedImage="require('../../assets/index/bon/woH.png')"
            :normalImage="require('../../assets/index/bon/wo.png')"
          ></tabbaricon>我 的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import indexHead from "./common/indexHead";
import indexChoice from "./common/indexChoice";
import indexSlideshow from "./common/indexSlideshow";
import indexProduct from "./common/indexProduct";
import indexActive from "./common/indexActive";
import mineHomepage from "./common/mineHomepage";
import mineHeadbar from "./common/mineHeadbar";
import communityHead from "./common/communityHead";
import orderIndex from "./common/orderIndex";
import TabBarIcon from "./common/TabBarIcon.vue"; //引入脚部列表
import { close } from "fs";
import { setInterval } from "timers";
import { dirname } from "path";
// import {carouseOne} from "../../api/carousel.js"
// 用户登录信息来判断需要显示的元素
import { denglu } from "../../api/denglu.js";

export default {
  data() {
    return {
      choiceImage: true,
      hearImage: false,
      active: "shouye",
      currentIdx: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ],
      carList: [""],
      // 判断用户是否登录
      nnm: false
    };
  },

  components: {
    indexhead: indexHead, //页头
    tabbaricon: TabBarIcon, //底部列表
    indexchoice: indexChoice, //主页选项
    indexslideshow: indexSlideshow, //主页轮播图
    indexactive: indexActive, //主页热门活动
    indexproduct: indexProduct, //主页热卖店铺
    minehomepage: mineHomepage, //我的的主页
    mineheadbar: mineHeadbar, //我的的页头
    communityhead: communityHead, //社区的页头
    orderindex: orderIndex //社区的页头
  },
  // created() {
  //   contentlun;
  // },

  beforeMount() {
    denglu().then(data => {
      if (data == -1) {
        this.nnm = true;
      } else {
        this.nnm = true;
      }
    });

    //可以在这里面直接进行滚动条的获取
    // window.addEventListener("scroll", this.handleScroll, true),
    //   (window.onload = this.chioceImagechange);
  },
  methods: {
    chioceImagechange() {
      setInterval(() => {
        this.choiceImage = this.choiceImage == false;
      }, 3000);
    },
    // handleScroll() {
    //   var top = Math.floor(
    //     document.body.scrollTop ||
    //       document.documentElement.scrollTop ||
    //       window.pageXOffset
    //   );
    //   var headindex = document.getElementById("indexhead");
    //   var mineheadbar = document.getElementById("mineheadbar");
    //   if (top > 120) {
    //     this.hearImage = true;
    //     headindex.style.backgroundColor = "#fff";
    //   } else {
    //     this.hearImage = false;
    //     headindex.style.backgroundColor = "transparent";
    //   }
    //   if (top > 190) {
    //     mineheadbar.style.display = "block";
    //   } else {
    //     mineheadbar.style.display = "none";
    //   }
    // },
    changeState(idx) {
      for (var i = 0; i < this.currentIdx.length; i++) {
        if (i == idx) {
          this.currentIdx[i].isSelect = true;
        } else {
          this.currentIdx[i].isSelect = false;
        }
      }
    }
  }
};
</script>

 <style>
/* .minbn::-webkit-scrollbar {
     width: 0;
}
 */
.page-tabbar-container {
  position: fixed;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent !important;
  color: #d90d1d !important;
}
.mint-tabbar > .mint-tab-item {
  background-color: transparent;
  color: #999999 !important;
}
/* 底部栏样式 */
.minban > .mint-tabbar {
  box-shadow: 0rem -0.25rem 1.25rem #8787874d;
  background-image: linear-gradient(180deg, #fff, #fff 100%);
}
</style> 