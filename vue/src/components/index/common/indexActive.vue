<template>
  <div class="contentactive" v-show=" pno==1">
    <h4>热门活动</h4>
    <div class="activeall">
      <div class="avtiveone" v-for="(item,index) of rList" :key="index">
        <!-- <img :src="'http://127.0.0.1:5050/'+item.img" alt /> -->
        <img :src="cc(item.img)" alt />
        <div class="textactive">
          <div class="toptext">
            <span>
              <!-- #一句话总结2019# -->
              {{item.text1}}
            </span>
            <div>
              <img :src="cc(item.tImg)" alt />
              <span>{{item.count}}</span>
            </div>
          </div>
          <h5>{{item.text2}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { rmhdOne } from "../../../api/rmhdOne.js";
import {getURL} from "../../../api/url.js";
export default {
  data() {
    return {
      rList: [""],
      pno: 0,
      cc:{},
    };
  },
  created() {
    this.rmhdMore();
    this.cc=getURL
  },
  methods: {
    rmhdMore() {
      this.pno++;
      let pno = this.pno;
      rmhdOne(pno).then(data => {
        this.rList = data;
      });
    }
  }
};
</script>

 <style scoped>
.contentactive {
  margin-bottom: 3.4375rem;
}
.contentactive h4 {
  font-size: 1.4rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.activeall {
  height: 13.875rem;
  width: 100%;
  /* float: left;
     */
  overflow-y: hidden;
  white-space: nowrap;
}
.activeall::-webkit-scrollbar {
  display: none;
}
.avtiveone {
  display: inline-block;
  margin-left: 1rem;
  width: 17.1875rem;
  border-radius: 0.3125rem;
  background-color: #f6f6f6;
}
.activeall .avtiveone ~ .avtiveone {
  margin-right: 1rem;
}
.textactive .toptext {
  display: flex;
  justify-content: space-between;
}
.textactive {
  padding: 1rem;
  padding-bottom: 1rem !important;
}
.textactive h5 {
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #adadad;
}
.toptext img {
  height: 1rem;
  margin-bottom: 0.125rem;
}
</style> 