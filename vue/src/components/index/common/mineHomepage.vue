<template>
  <div class="contantmine" style="width:100%">
    <div class="headminguser">
      <div class="sezhi">
        <img src="/img/sezhi.png" />
        <img src="/img/xinxi.png" />
      </div>

      <div class="headminguserimg">
        <img id="mineheadimg" :src="mineheadimg1" alt />
      </div>
      <!-- 按钮 -->
      <mt-button id="mineheadbtn" @click="mineLogin" class="minebtn">点击登录/注册</mt-button>
      <!-- 用户名 -->
      <h5 id="mineheadh5" class="mineheadh5">
        {{username}}
        <img
          id="mineheadh5img"
          style="width:1.5rem;display:none"
          src="../../../assets/mine/huiyuanH.png"
          alt
        />
        <!-- 会员小图标 -->
        <img id="mineheadh5img2" class="huiyuan" src="../../../assets/mine/huiyuan.png" alt />
      </h5>

      <mt-button
        style="display:none;width:80px;margin:0 auto;"
        id="mineheadbtntuichu"
        @click="mineLogin"
        class="minebtn"
      >退出</mt-button>
    </div>

    <div class="mineul">
      <!-- <div class="youhui">
        <li>
          <h5>优惠券</h5>
        </li>
        <li class="zhong">
          <h5>津贴</h5>
        </li>
        <li>
          <h5>钱包</h5>
        </li>
      </div>-->
      <ul>
        <!-- <span>我的动态</span> -->
        <li>
          <div>
            <img src="../../../assets/mine/shouchangjia.png" alt />
            <span>收藏夹</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/shequ.png" alt />
            <span>社区</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/xiaoxi.png" alt />
            <span>消息</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
      </ul>
      <ul>
        <!-- <span>我的服务</span> -->
        <li>
          <div>
            <img src="../../../assets/mine/bangzhu.png" alt />
            <span>寻求帮助</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/tousu.png" alt />
            <span>投诉表扬</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/xiaomi.png" alt />
            <span>捞小秘</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
      </ul>
      <ul>
        <!-- <span>关于海底捞</span> -->
        <li>
          <div>
            <img src="../../../assets/mine/ren.png" alt />
            <span>海选征集</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/qiye.png" alt />
            <span>关于企业</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/gonggao.png" alt />
            <span>公告</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
        <li>
          <div>
            <img src="../../../assets/mine/shezhi.png" alt />
            <span>个人设置</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
      </ul>
      <!-- <ul>
        <li>
          <div>
            <img src="../../../assets/mine/shezhi.png" alt />
            <span>个人设置</span>
          </div>
          <img src="../../../assets/mine/mineright.png" alt />
        </li>
      </ul>-->
    </div>
  </div>
</template>
<script>
import { minehead } from "../../../api/mine.js";
import { zhuLoginOne } from "../../../api/zhuLoginOne.js";
import {getURL} from "../../../api/url.js";
export default {
  data() {
    return {
      mineheadimg1: "",
      mineheadimgh5: true,
      username: "",
      cc:{}
    };
  },
  methods: {
    // 此处代码需要优化
    //跳转至登录
    mineLogin() {
      zhuLoginOne().then(
        data=>{
          if(data==1){
       this.mineheadimg1 = this.cc('mine.png');
      //  this.mineheadimg1 = getURL(mine.png);
       this.username="";
      this.$store.commit("updateUserName", this.username);
          mineheadbtntuichu.style.display="none"
        mineheadbtn.style.display="inline-block";

        }else{
         this.$router.push("/login");
      }
      }
      );
    }
  },
  created() {
    this.cc=getURL;
    minehead().then(data => {
      var mineheadbtn = document.getElementById("mineheadbtn");
      var mineheadimg = document.getElementById("mineheadimg");
      var mineheadh5 = document.getElementById("mineheadh5");
      var mineheadh5img = document.getElementById("mineheadh5img");
      var mineheadh5img2 = document.getElementById("mineheadh5img2");
      var mineheadbtntuichu = document.getElementById("mineheadbtntuichu");
      if (data == -1) {
        // this.mineheadimg1 = "http://127.0.0.1:5050/mine.png";
        this.mineheadimg1 = this.cc('mine.png');
        //this.mineheadimg1='http://176.221.15.50:5050/mine.png'
      } else {
        mineheadbtntuichu.style.display = "block";
        this.username = data.name;
        mineheadh5.style.display = "block";
        if (data.vips == 1) {
          mineheadh5img.style.display = "inline-block";
        } else {
          mineheadh5img2.style.display = "inline-block";
        }
        mineheadbtn.style.display = "none";
        //  console.log(data.timgs)
        this.mineheadimg1 =this.cc(data.timgs);
        //this.mineheadimg1=' http://176.221.15.50:5050/'+data.timgs
      }
    });
  }
};
</script>
 <style scoped>
/* 用户名 */
.mineheadh5 {
  display: block;
  margin: 2rem 0 0 5.3125rem;
  font-size: 1.5625rem;
}
/* 顶部图标div */
.sezhi {
  width: 100%;
  height: 3.75rem;
}
/* 顶部图标 */
.sezhi > img {
  width: 1.5625rem;
  height: 1.5625rem;
  float: right;
  margin: 1.25rem 0.9375rem 0 0;
}
.headminguser {
  height: 9.375rem;
  margin-bottom: 0.625rem;
}
/* 头像div */
.headminguserimg {
  margin: 1.25rem 0.9375rem;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  /* overflow: hidden;
     */
  position: absolute;
}
/* 头像 */
.headminguserimg img {
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* 会员小图标 */
.huiyuan {
  display: inline-block;
  margin: -0.625rem -0.3125rem 0;
  width: 1.25rem;
  height: 1.25rem;
}
/* 按钮 */
.headminguser .minebtn {
  height: 1.9375rem;
  border-radius: 1.5rem;
  line-height: 1.9375rem;
  color: #fff;
  float: right;
  top: -1.875rem;
  right: 0.9375rem;
  background: #f74747b3;
  margin-top: 3.75rem;
}
/* 按钮字体样式 */
.contantmine >>> .mint-button-text {
  font-size: 1rem;
}
.mineul {
  /* padding-top: 17.8125rem;
     */
  padding-bottom: 0.5rem;
  margin-bottom: 3.4375rem;
}
.mineul ul {
  list-style: none;
  padding-left: 0;
  border-bottom: 0.0625rem solid #cccccc75;
  margin: 0.625rem 0 0.625rem;
}
.mineul ul > span {
  padding-left: 1rem;
  display: block;
  padding-bottom: 0.3rem;
  font-size: 0.9375rem;
}
.mineul li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 2.0625rem;
  background-color: #f5f5f5;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 1.125rem 1rem;
}
/* li的小图标 */
.mineul > ul > li > div > img {
  margin-right: 0.75rem;
  width: 1.5625rem;
  height: 1.5625rem;
  float: left;
}
/* li中的文字 */
.mineul > ul > li > div > span {
  line-height: 1.6875rem;
  height: 1.0625rem;
  display: table;
  font-size: 0.9375rem;
}
/* 箭头 */
.mineul > ul > li > img {
  width: 1.1875rem;
  height: 1.3125rem;
}
.youhui {
  position: relative;
  width: 96%;
  display: flex;
  justify-content: space-around;
  margin: 0 2%;
  flex-wrap: row nowrap;
}
.youhui li {
  width: 30%;
  height: 3.125rem;
  border-radius: 0.375rem;
  box-shadow: 0.1875rem 0.1875rem 0.8125rem #d7d7d74a;
}
.youhui li h5 {
  font-size: 1.0625rem;
  font-weight: 600;
}
</style> 