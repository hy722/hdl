<template>
<div class="contentlun" v-show="carList!==''">
  <mt-swipe :speed="500" :auto="3000">
  <mt-swipe-item v-for="(item,i) of carList" :key="i">
    <!-- <img :src="'http://127.0.0.1:5050/'+item.cimg" alt=""> -->
    <img :src="cc(item.cimg)" alt="">
  </mt-swipe-item> </mt-swipe>
</div>
</template>
<script>
import {carouseOne} from "../../../api/carousel.js"
import {getURL} from "../../../api/url.js";
export default {
    data(){
      return{
        carList:[],
        cc:{}
      }
    },
    created(){
      this.cc=getURL;
      carouseOne().then(data=>{
        this.carList=data;
        //console.log(data);
      });
    }
}
</script>
<style scoped>
.contentlun{
  margin-top: 1rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 180px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.contentlun img{
  width:  100%;
}
</style>

