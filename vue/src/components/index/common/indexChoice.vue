<template>
  <div class="indexchoise">
    <div class="bonchoise">
      <!-- 图片动态切换 -->
      <img :src="inchoisc?choiseimg:choiseimg1" alt />
    </div>
  
  </div>
</template>
<script>
export default {
  props: {
    inchoisc: true,
    choiseimg: { default: "" },
    choiseimg1: { default: "" }
  }
};
</script>
 <style scoped>
.indexchoise {
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: linear-gradient(#ffffff, #f5f5f5);
  /* margin-top:1rem;
     */
}
.contenter {
  display: flex;
}
.choice {
  width: 31%;
  text-align: center;
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0.1875rem 0.1875rem 0.625rem rgba(70, 70, 70, 0.2);
}
.choice:nth-child(1) {
  background-color: #ffffcc;
}
.choice:nth-child(2) {
  background-color: #ccffff;
}
.choice:nth-child(3) {
  background-color: #ffcccc;
}
.choice:nth-child(4) {
  background-color: #ccccff;
}
.choice ~ .choice {
  margin-left: 2%;
}
.bonchoise {
  width: 100%;
  box-shadow: 0.1875rem 0.1875rem 0.3125rem rgba(70, 70, 70, 0.2);
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 5.625rem;
  overflow: hidden;
}
.bonchoise img {
  width: 100%;
  border-radius: 0.3125rem;
}
.choice img {
  float: right !important;
}
.choice .big {
  font-weight: bold;
  font-size: 1.3rem;
}
.choice .small {
  font-size: 0.7rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  color: #9d9d9d;
}
</style> 
