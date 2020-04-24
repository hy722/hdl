<template>
  <div style="touch-action:none">
   
    <!-- 顶部固定 -->
    <div class="sousuolan">
      <!-- 搜索框 -->
      <div>
        <img src="/img/b_q.png" alt />
        <span>烧烤</span>
      </div>
    </div>
    <!-- 背景 -->
    <div id="indexheadbj" class="bj">
      <div class="bj_bt">
        <span>热搜 :</span>
        <span>口罩</span>
        <span>|</span>
        <span>安心返工</span>
        <span>|</span>
        <span>安心返工</span>
        <span>|</span>
        <span>螺蛳粉</span>
        <span>|</span>
        <span>干锅</span>
        <span>|</span>
        <span>薯片</span>
      </div>
      <div class="saoyisao">
        <img src="/img/ajm.png" />
        <img src="/img/fukuanma.png" />
        <img src="/img/qiche.png" />
        <img src="/img/chagongjiao.png" />
      </div>
      <div class="wenz">
        <span>扫一扫</span>
        <span>代付款</span>
        <span>点外卖</span>
        <span>查公交</span>
      </div>
      <div class="kapian">
        <div class="zidong">
          <div>
            <img src="/img/aqz.webp" />
            <h4>水果</h4>
          </div>
          <div>
            <img src="/img/ar1.webp" />
            <h4>零食</h4>
          </div>
          <div>
            <img src="/img/ar2.webp" />
            <h4>饮料</h4>
          </div>
          <div>
            <img src="/img/aqu.webp" />
            <h4>早餐</h4>
          </div>
        </div>
        <div class="kapia">
          <div>
            <div>
              <img src="/img/yy_1.png" />
              <h4>打车</h4>
            </div>
            <div>
              <img src="/img/yy_2.png" />
              <h4>景点</h4>
            </div>
            <div>
              <img src="/img/yy_3.png" />
              <h4>旅游</h4>
            </div>
            <div>
              <img src="/img/yy_4.png" />
              <h4>美发</h4>
            </div>
            <div>
              <img src="/img/yy_5.png" />
              <h4>机票</h4>
            </div>
          </div>
          <div>
            <div>
              <img src="/img/yy_6.png" />
              <h4>位置</h4>
            </div>
            <div>
              <img src="/img/yy_7.png" />
              <h4>饮料</h4>
            </div>
            <div>
              <img src="/img/yy_8.png" />
              <h4>水果</h4>
            </div>
            <div>
              <img src="/img/yy_9.png" />
              <h4>客栈</h4>
            </div>
            <div>
              <img src="/img/yy_10.png" />
              <h4>更多</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
 <style scoped>
/* 顶部固定 */
.sousuolan {
  width: 100%;
  height: 4.375rem;
  position: fixed;
  margin: 0;
  background-image: linear-gradient(#ff3838, #ff5e5e);
  z-index: 999;
}
/* 搜索栏 */
.sousuolan > div {
  height: 2.1875rem;
  background: #fff;
  width: 90%;
  margin: 1.25rem 5%;
  border-radius: 1.25rem;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
}
.sousuolan > div > img,
.sousuolan > div > span {
  display: inline-block;
  height: 0.9375rem;
  line-height: 0.9375rem;
  text-align: center;
  color: #a5a5a5;
  font-size: 0.6875rem;
  margin-right: 0.375rem;
  /* vertical-align: middle;
     */
}
/* 顶部渐变背景 */
.bj {
  overflow: hidden;
  overflow-y: auto;
  /* position: absolute;
     */
  top: 0;
  width: 100%;
  height: 23.4375rem;
  z-index: -1;
  background-image: linear-gradient(#ff3838 0%, #ff8585 40%, #fff 80%);
}
.bj_bt {
  margin: 4.375rem 1.875rem 0;
  font-size: 0.75rem;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-around;
  align-items: center;
  color: #5f5f5f;
  /* text-align: center;
     */
}
/* 卡片第一排 */
.zidong {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 0.625rem;
  padding-top: 1.25rem;
}
.zidong > div {
  /* background-color: aquamarine;
     */
  width: 3.75rem;
  height: 3.75rem;
  padding-top: 0.3125rem;
  border-radius: 0.8125rem;
  opacity: 0.9;
}
/* .zidong>div:nth-of-type(1){
     background-color: #FFC607;
}
 .zidong>div:nth-of-type(2){
     background-color: #FF8900;
}
 .zidong>div:nth-of-type(3){
     background-color: #00D2AB;
}
 .zidong>div:nth-of-type(4){
     background-color: #FF612A;
}
 */
.zidong img {
  width: 2.1875rem;
  height: 2.1875rem;
}
.zidong h4 {
  font-size: 0.875rem;
  height: 1.25rem;
  line-height: 1.4375rem;
}
.kapia > div {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 0.625rem;
}
.kapia > div img {
  width: 1.4375rem;
  height: 1.4375rem;
}
.kapia > div h4 {
  font-size: 0.75rem;
  height: 0.6875rem;
  line-height: 1.25rem;
}
.saoyisao {
  display: flex;
  flex-flow: nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0.9375rem 1.25rem 0;
  width: 100%;
  text-align: center;
  flex-basis: 25%;
}
/* 扫一扫图片 */
.saoyisao > img {
  width: 2.1875rem;
  height: 2.1875rem;
}
.saoyisao > img:last-of-type {
  padding: 0.3125rem;
}
.wenz {
  display: flex;
  flex-flow: nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 0.8125rem;
}
.wenz > span {
  font-weight: 600;
}
/* 白色背景 */
.kapian {
  /* width: 92%;
     */
  width: 92%;
  height: 9.375rem;
  margin: 1.25rem 4% 0;
  /* margin:0 4%;
     */
  background-color: #fff;
  border-radius: 1.25rem 1.25rem 0 0;
}
.content {
  display: flex;
  /*弹性布局*/
  position: fixed;
  /*固定定位*/
  z-index: 999;
  /*浮动在最上方*/
  width: 100%;
  justify-content: space-between;
  /*两端对齐*/
  align-items: center;
  /*垂直居中*/
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-position: 0;
  background-color: transparent;
}
.content a img {
  width: 1.7rem;
}
.headbj {
  display: flex;
  /*弹性布局*/
  position: fixed;
  /*固定定位*/
  z-index: 899;
  /*浮动在最上方*/
  width: 100%;
  justify-content: space-between;
  /*两端对齐*/
  height: 3rem;
}
.headbj .bjleft {
  width: 50%;
  background-color: #d90d1d;
}
.search {
  width: 13.125rem;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 0.2rem;
  padding-left: 1rem;
  color: #8a8a8a;
}
.search img {
  margin-bottom: 0.25rem;
  margin-left: 2rem;
}
.left {
  position: absolute;
  top: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.left h5 {
  color: #fff;
  font-family: "KaiTi_GB2312";
  /* font-weight: bolder;
     */
}
.btnlogin {
  height: 1.875rem;
  width: 5.625rem;
  margin-top: 1rem;
  border-radius: 1rem;
  font-size: 0.7rem;
  font-weight: bold;
  color: #d90d1d;
  line-height: 1.875rem;
  font-family: "KaiTi_GB2312";
  box-shadow: 0.1875rem 0.1875rem 0.625rem rgba(0, 0, 0, 0.2);
}
</style> 