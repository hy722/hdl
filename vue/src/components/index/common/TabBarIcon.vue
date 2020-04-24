<template>
<img :src="focused?selectedImage:normalImage" alt=""
 class="imgStyle"
>
</template>
<script>
export default {
  props:{
    focused:false,//当前图片是否是焦点
    selectedImage:{default:""},//焦点图片
    normalImage:{default:""}//失去焦点图片
  }
}
</script> 
<style scoped>

</style>
