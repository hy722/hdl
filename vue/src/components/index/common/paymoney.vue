<template>
  <div class="payMoneys">
    <div class="payhead">
      <img @click="payNone" src="../../../assets/pay/leftFh.png" alt="">
      <div>支付账单</div>
      <!-- <img style="width:1.5rem;" src="" alt=""> -->
    </div>
    <div class="paycontont">
      <span class="paycontont1">支付时间剩余：{{minute}}:{{second}}</span>
      <span class="paycontont2">￥{{msg}}</span>
      <span class="paycontont3">海底捞火锅(重庆江北店)</span>
    </div>
    <div></div>
    <div class="payword">
      <!-- <span>输入密码</span> -->
      <input type="password" maxlength="6" placeholder="请您输入您的支付密码" v-model="payPwd">
    </div>
    <div class="paybtn">
      <button @click="userPayOneInfo">确认支付</button>
    </div>
  </div>
</template>
<script>
 import {userPayOne} from "../../../api/payMoneyOne.js"
  export default {
     data(){
       return{
         minutes:15,
         seconds:0,
         payPwd:"",
       }
     },
     props:["msg","payNone","emptyCartUser"],
     created(){
       this.timer();
     },
     methods: {
       //支付的接口请求方法
       userPayOneInfo(){
         this.$messagebox.confirm("你是否要确定要支付")
        .then(res=>{
            userPayOne(this.payPwd).then(
              data=>{
                if(data==1){
                     this.$messagebox("支付消息","支付成功");
                     this.$router.push("/");
                     this.emptyCartUser();
                }else{
                    this.$messagebox("支付消息","支付失败");
                }
              }
            ); 
        }).catch(err=>{
           //console.log(err);
        });
       },
      //倒计时
      num(n) {
        return n < 10 ? '0' + n : '' + n
      },
      timer(){
        var time = window.setInterval( ()=>{
          if (this.seconds === 0 && this.minutes !== 0) {
            this.seconds = 59
            this.minutes -= 1
          } else if (this.minutes === 0 && this.seconds === 0) {
            this.seconds = 0;
            window.clearInterval(time);
            this.payNone();
          } else {
            this.seconds -= 1
          }
        }, 1000)
      
       }
     },
     mounted() {
      this.timer()
    },
    watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
          
        }
      },
      minute: {
        handler (newVal) {
          this.num(newVal)
        }
      }
    },
    computed:{
      minute:function(){
        return this.num(this.minutes);
      },
      second:function(){
        return this.num(this.seconds);
      }

    }
  }
</script>
<style scoped>
.payMoneys{
   width:100%;
   height:100vh;
   background:url("../../../assets/loginPic/bgg.jpg") no-repeat;
   background-size:cover;
  /* background:rgba(8, 7, 7, 0.1); */
   text-align: center; 
   position:fixed;
}
.payhead{
  /* position: fixed; */
   /* display: flex;
  justify-content: space-between; */
  width: 100%;
  height:3.1rem;
  line-height:3.1rem;
  /* background-image: linear-gradient(to top,  rgb(235, 45, 11),#f06626); */
  color:#fff;
  opacity:0.8;
  text-align: center;
  font-size: 1.2rem;
  position: relative;
}
.payhead img{
   height: 1.2rem;
   position:absolute;
   left:5%;
   top:1.0rem;
}

.paycontont{
  width:100%;
  padding-top: 65px;
  text-align: center;
}
.paycontont span{
  display: block;
}
.paycontont1{
  font-size: .9rem;
  color: #fff;
}
.paycontont2{
  font-size: 1.6rem;
  font-weight: bold;
  color: rgb(241, 182, 19);
}
.paycontont3{
  font-size: .9rem;
  color: #fff;
}
.paybtn{
  width: 100%;
  bottom:5rem;
  position: fixed;
  padding: 1.5rem;
  padding-top: 0
}
.paybtn button{
  width: 100%;
  background-image: linear-gradient(to top,  rgb(235, 45, 11),#f06626);
  height: 3rem;
  border: 0;
  border-radius: 5px;
  color: #fff;
}
.payword{
  padding-top:3rem;
  text-align: center;
}
.payword span{
  display: block;
  font-size: 2rem;
  font-weight: bolder;
}
.payword input{
  width: 92%;
  border: 0;
  border: 1px solid #ccc;
  margin-top: 3rem;
  line-height: 2rem;
  padding: .5rem;
  border-radius: 0.5rem;
  text-align: center;
}
.payword input:focus{
  border: 0;
  border-bottom: 1px solid #d91d0d;
  outline: 0;
}
</style>
