<template>
  <div >
    <div id="mineheadbar" class="headminebarcontant">
    <span>我的</span>

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped> .headminebarcontant{
     margin: 0 auto;
     background-color: #fff;
     position: fixed;
    /*固定定位*/
     z-index: 999;
    /*浮动在最上方*/
     width: 100%;
     height: 3rem;
     text-align: center;
     display: none;
}
 .headminebarcontant span{
     line-height: 3rem;
     font-size: 1.3rem;
     font-weight: bold;
}
 </style> 
