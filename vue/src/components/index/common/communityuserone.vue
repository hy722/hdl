<template>
  <div class="tuijianconall" v-show="this.nnm">
    <div class="tuijianoneall" v-for="(item,index) of cList" :key="index">
      <div class="tuijianonehead">
        <div class="tuijianoneheadleft">
          <div class="userimg">
            <!-- <img :src="'http://127.0.0.1:5050/tuijianone/'+item.titleImg" alt /> -->
            <img :src="cc(item.titleImg)" alt />
          </div>
          <span>{{item.ftitle}}~</span>
          <img :src="cc(item.hbImg)" alt />
        </div>
        <div class="tuijianoneheadright">
          <mt-button>+关注</mt-button>
          <img src="../../../assets/community/tuijianone/diandiandian.png" alt />
        </div>
      </div>
      <div class="tuijiancontent">
        <span class="tuijiancontentact">#{{item.zcText}}#</span>
        <span>{{item.contentText}}</span>
      </div>
      <!-- v-for="(p,index) of FxImgList" :key="index" -->
      <div class="tuijianimg">
        <div>
          <!-- <img :src="'http://127.0.0.1:5050/tuijianone/'+FxImgList[0]" alt /> -->
          <img :src="cc(FxImgList[0])" alt />
        </div>
        <div>
          <!-- <img :src="'http://127.0.0.1:5050/tuijianone/'+FxImgList[1]" alt /> -->
          <img :src="cc(FxImgList[1])" alt />
        </div>
        <div>
          <!-- <img :src="'http://127.0.0.1:5050/tuijianone/'+FxImgList[2]" alt /> -->
          <img :src="cc(FxImgList[2])" alt />
        </div>
      </div>
      <div class="tuijianbottom">
        <div>
          <span>{{item.fbxq}}</span>
          <span>{{item.fbly}}</span>
        </div>
        <div class="tuijianbottomright">
          <!-- <img :src="'http://127.0.0.1:5050/tuijianone/'+item.plxiImg" alt /> -->
          <img :src="cc(item.plxiImg)" alt />
          <span>{{item.plun}}</span>
          <!-- <img :src="'http://127.0.0.1:5050/tuijianone/'+item.scGzImg" alt /> -->
          <img :src="cc(item.scGzImg)" alt />
          <span>{{item.pscGz}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*引入ajax请求方法 */
import { communityOne } from "../../../api/communityOne.js";
import {getURL} from "../../../api/url"
export default {
  data() {
    return {
      cList: [""],
      FxImgList: [""],
      pno: 0,
      nnm: false,
      cc:{}
    };
  },
  created() {
    this.communityMore();
    this.cc=getURL;
    console.log(this.cc)
  },
  methods: {
    communityMore() {
      this.pno++;
      let pno = this.pno;
      communityOne(pno).then(data => {
        this.cList = data;
        this.nnm = true;
        for (var item of data) {
          this.FxImgList = item.fxImg.split(",");
        }
        // console.log(this.FxImgList[0],data);
      });
    }
  }
};
</script>
 <style scoped>
.tuijianconall {
  margin-bottom: 3.4375rem;
}
.tuijianoneall {
  /* display: flex;
     */
  padding: 1rem;
  /* border-bottom: 0.0625rem solid #9a9a9a;
     */
}
.tuijianonehead {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
}
.tuijianonehead .tuijianoneheadleft {
  display: flex;
}
.tuijianonehead .tuijianoneheadleft > img {
  margin-left: 0.2rem;
  width: 1.5625rem;
  height: 1.5625rem;
}
.tuijianonehead .tuijianoneheadleft > span {
  margin-left: 0.8rem;
}
.tuijianonehead .tuijianoneheadleft .userimg {
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 1.5625rem;
  overflow: hidden;
}
.tuijianonehead .tuijianoneheadleft .userimg img {
  width: 3.125rem;
  height: 3.125rem;
}
.tuijianonehead .tuijianoneheadright img {
  margin-left: 1rem;
}
.tuijianonehead .tuijianoneheadright button {
  height: 1.7rem;
  border: 1px solid #d9091d;
  border-radius: 1rem;
  color: #d9091d;
  font-size: 0.9rem;
  line-height: 1.6rem;
}
.tuijiancontent {
  margin-bottom: 0.5rem;
}
.tuijiancontent span {
  font-size: 0.9rem;
}
.tuijiancontent .tuijiancontentact {
  color: #d9091d;
}
.tuijianimg {
  display: flex;
  margin-bottom: 0.5rem;
}
.tuijianimg div {
  width: 6.875rem;
  height: 6.875rem;
  overflow: hidden;
  text-align: center;
}
.tuijianimg div img {
  height: 6.875rem;
  line-height: 6.875rem;
}
.tuijianimg div ~ div {
  margin-left: 0.5rem;
}
.tuijianbottom {
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
}
.tuijianbottom .tuijianbottomright img {
  margin-bottom: 0.2rem;
}
.tuijianbottom .tuijianbottomright img ~ img {
  margin-left: 1rem;
}
.tuijianbottom .tuijianbottomright span {
  margin-left: 0.2rem;
}
</style> 