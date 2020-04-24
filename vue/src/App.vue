<template>
  <div class="app-container">
    <!--显示组件容器-->
    <router-view></router-view>
  </div>
</template>
<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (max-width: 1000px) {
  html,
  body {
    font-size: 25px;
  }
}

@media (max-width: 750px) {
  html,
  body {
    font-size: 20px;
  }
}

@media (max-width: 450px) {
  html,
  body {
    font-size: 18px;
  }
}

@media (max-width: 400px) {
  html,
  body {
    font-size: 16px;
  }
}

@media (max-width: 350px) {
  html,
  body {
    font-size: 14px;
  }
}

.app-container {
  padding-top: 0rem;
  padding-bottom: 0rem;
  overflow-x: hidden;
  background: #f5f5f5;
}
.mui-bar-tab .mui-tab-item-tao.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-tao {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 3.125rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
  top: 0.1875rem;
  width: 1.5rem;
  height: 1.5rem;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon ~ .mui-tab-label {
  font-size: 0.6875rem;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style> 