<template>
  <div class="pingfen">
    <div class="tab">
      <img @click="fanhui()" src="/img/btl.webp" alt />
      <span>我的评论</span>
      <button>发布</button>
    </div>
    <div class="pinfen">
      <!-- 评分 -->
      <!-- 分数 -->
      <div>
        <span class="fen">{{this.value*2}}</span>
        <span>分</span>
      </div>
      <van-rate size="25px" v-model="value" allow-half void-icon="star" void-color="#eee" />
    </div>
    <div class="pingjia">
      <!-- <input placeholder="好吃吗？快来写下你的感受" placeholder-colo
      r="red" type="text" name id /> -->
    <textarea  rows="10" autofocus="autofocus" placeholder="好吃吗？快来写下你的感受">
        </textarea>
   
    </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      value: 2.5
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      fanhui(){
           this.$router.push({ path: "/" });
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
 <style scoped> 
/* @import url();
 引入公共css类 */
/* 顶部 */
 .tab {
     display: flex;
     justify-content: space-between;
     padding: 0.625rem 1.25rem;
}
 .tab > img {
     width: 1.5625rem;
     height: 1.5625rem;
}
 .tab > span {
     font-size: 1.0625rem;
}
 .tab > button {
     background-color: tomato;
     outline: 0;
     border: 0;
     width: 3.25rem;
     height: 1.75rem;
     font-size: 0.875rem;
     color: #fff;
     border-radius: 0.1875rem;
}
/* 评分div */
 .pinfen {
     text-align: center;
     border-bottom: 0.0625rem solid #eee;
     color: #ffd21e;
     padding-bottom: 1.25rem;
}
/* 分数 */
 .fen {
     font-size: 3.125rem;
}
 .pingjia > textarea {
     outline: 0;
     border: 0;
     width: 100%;
     padding: 0.625rem 0.625rem;
}
 </style> 