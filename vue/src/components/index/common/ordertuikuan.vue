<template>
  <div class="orderallall">
    <div class="orderallone">
      <div @click="orderProdu" class="orderallonehead">
        <img src="../../../assets/dingdan/remai/dianjia6.jpg" alt />
        <div class="orderalloneheadhead">
          <div>
            <span>海底捞重庆渝中店></span>
            <span>退款成功</span>
          </div>
        </div>
      </div>
      <div class="orderalloneimg">
        <div class="orderalloneimgone">
          <div>
            <img src="../../../assets/dingdan/one/cai4.jpg" alt />
          </div>
          <span>鲜毛肚</span>
        </div>
        <div class="orderalloneimgone">
          <div>
            <img src="../../../assets/dingdan/one/cai5.jpg" alt />
          </div>
          <span>午餐肉</span>
        </div>
        <div class="orderalloneimgpic">
          <div>
            <span>￥36.96</span>
            <span>共2件</span>
          </div>
        </div>
      </div>
      <div class="orderallonebtn">
        <div>
          <span>再来一单</span>
        </div>
        <div>
          <span>退款详情</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    orderProdu() {
      this.$router.push("/Produ");
    }
  }
};
</script>
 <style scoped>
.orderallall {
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3.4375rem;
}
.orderallone {
  padding-top: 1rem;
  height: 14.0625rem;
  border-bottom: 0.0625rem solid #ccc;
  margin-bottom: 1rem;
  position: relative;
}
.orderallonehead {
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
}
.orderallonehead > img {
  width: 2.2rem;
  height: 2.2rem;
}
.orderalloneheadhead span {
  display: inline-block;
  font-size: 0.9rem;
}
.orderalloneheadhead span ~ span {
  color: #8f8f8f;
  float: right;
}
.orderalloneheadhead {
  width: 100%;
  margin-left: 0.8rem;
}
.orderalloneimg {
  margin-top: 1rem;
  display: flex;
  overflow-y: hidden;
  margin-bottom: 1rem;
  white-space: nowrap;
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
  border-radius: 0.5rem;
  overflow: hidden;
  height: 5rem;
  width: 6.25rem;
}
.orderalloneimgone span {
  font-size: 0.9rem;
  display: block;
}
.orderalloneimgone img {
  height: 100%;
  width: 100%;
}
.orderalloneimgpic {
  width: 25%;
  right: -0.0625rem;
  top: 4rem;
  height: 6.25rem;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  text-align: center;
  padding-top: 1.6875rem;
}
.orderalloneimgpic span ~ span {
  font-size: 0.9rem;
  display: block;
}
.orderallonebtn {
  display: flex;
  float: right;
}
.orderallonebtn div {
  border: 1px solid #ccc;
  color: #999;
  padding: 0.3rem;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  width: 5rem;
  text-align: center;
}
.orderallonebtn div ~ div {
  border: 0;
  margin-right: 0;
  color: #fff;
  background-color: #d90d19;
}
</style> 