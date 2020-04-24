<template>
  <div class="regContainer">
    <!-- 顶部按钮 -->
    <van-nav-bar left-arrow @click-left="fhsyMore">
      <van-icon name="search" />
    </van-nav-bar>

    <table></table>
    <h5 class="marignTable">欢迎注册{{$store.getters.getUserName}}</h5>
    <div class="reg">
      <ul>
        <li>
          <div class="regInput">
            <input type="text" maxlength="9" placeholder="请输入您的用户名" v-model="rname" />
          </div>
          <div class="regMsg" :class="rnameRegClass">{{nameMsg}}</div>
        </li>
        <li>
          <div class="regInput">
            <input maxlength="19" type="password" placeholder="请输入密码" v-model="rpwd" />
          </div>
          <div class="regMsg" :class="rpwdRegClass">{{pwdMsg}}</div>
        </li>
        <li>
          <div class="regInput">
            <input maxlength="19" type="password" placeholder="请确认密码" v-model="qpwd" />
          </div>
          <div class="regMsg" :class="qpwdRegClass">{{qpwdMsg}}</div>
        </li>
        <!-- <li>
                  <div class="regInput">
                     <input maxlength="20" type="text" placeholder="请输入您的邮箱" v-model="remail">
                  </div>
                  <div class="regMsg" :class="remailClass">
                     {{emailMsg}}
                  </div>
               </li>
               <li class="Reggender">
                  <div class="regInput" id="radio">
                     <input type="radio" name="gender" value="1" checked>男
                     <input type="radio" name="gender" value="0">女
                  </div>
        </li>-->
        <li>
          <div class="regInput">
            <input maxlength="12" type="text" placeholder="请输入您的手机号" v-model="rphone" />
          </div>
          <div class="regMsg" :class=" PhoneClass">{{phoneMsg}}</div>
        </li>
        <li>
          <div class="regInput" id="code">
            <input maxlength="6" type="text" placeholder="请输入短信验证码" v-model="rcode" />
            <input :class="codeClass" type="button" value="获取验证码" @click="Fcode" id="fcode" />
          </div>
          <!-- <div class="regMsg" :class="hCodeClass">
                     {{codeMsg}}
          </div>-->
        </li>
      </ul>
      <div class="regBtn">
        <div class="regTop">
          <button @click="Regh">注册</button>
        </div>
        <div class="regBtn_bottom" @click="regLogin">已有账号点击此处跳转登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Reg } from "../api/reg.js";
import { fsCode } from "../api/fscode.js";
import { YzCode } from "../api/yzCode.js";
import { CzName } from "../api/yzcmName.js";
export default {
  data() {
    return {
      rname: "",
      rpwd: "",
      qpwd: "",
      rphone: "",
      rcode: "",
      rnameRegClass: {
        success: false,
        fail: false
      },
      rpwdRegClass: {
        success: false,
        fail: false
      },
      qpwdRegClass: {
        success: false,
        fail: false
      },
      PhoneClass: {
        success: false,
        fail: false
      },
      hCodeClass: {
        success: false,
        fail: false
      },
      nameMsg: "",
      pwdMsg: "",
      qpwdMsg: "",
      phoneMsg: "",
      codeMsg: "",
      codeClass: { failCode: false },
      countTimer: 60,
      fcode: "",
      isCode: false
    };
  },
  methods: {
    //返回首页
    fhsyMore() {
      this.$router.push("/");
    },
    //跳转登录
    regLogin() {
      this.$router.push("/login");
    },
    //验证用户名：
    yzName() {
      CzName(this.rname).then(data => {
        if (data == 1) {
          this.rnameRegClass = {
            fail: true
          };
          this.nameMsg = "用户名已存在";
          return false;
        } else if (data == 0) {
          this.rnameRegClass = {
            fail: false
          };
          this.nameMsg = "";
          return true;
        }
      });
    },
    name() {
      //验证用户名的正则表达式
      //不能以数字和各种符号开头且只能输入数字，中文，字母，长度4~7个字符
      let regName = /(^[^~`!@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'\<,\>\.\?\/0-9])[a-zA-Z0-9_\u4e00-\u9fa5]{3,6}$/;
      if (!regName.test(this.rname)) {
        this.rnameRegClass = {
          fail: true
        };
        this.nameMsg = "不能以数字和各种符号开头，且长度为4~7位";
        return false;
      } else {
        this.rnameRegClass = {
          fail: false
        };
        this.yzName();
        this.nameMsg = "";
        return true;
      }
    },
    //验证密码
    pwd() {
      //创建regPwd保存正则表达式
      let regPwd = /^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*?]{5,17}$/;
      if (!regPwd.test(this.rpwd)) {
        this.rpwdRegClass = {
          fail: true
        };
        this.pwdMsg = "必须包含一个大写和小写字母,长度为6~18位";
        return false;
      } else {
        this.rpwdRegClass = {
          fail: false
        };
        this.pwdMsg = "";
        return true;
      }
    },
    //验证确认密码
    hqpwd() {
      if (this.qpwd != this.rpwd) {
        this.qpwdRegClass = {
          fail: true
        };
        this.qpwdMsg = "两次密码输入不一样";
        return false;
      } else {
        this.qpwdRegClass = {
          fail: false
        };
        this.qpwdMsg = "";
        return true;
      }
    },
    //   //验证码邮箱
    //   remail(){
    //      //正则
    //      var epReg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z0-9]{2,4})$/;
    //      if(!epReg.test(this.remail)){
    //        this.remailClass={fail:true}
    //        this.emailMsg="邮箱正确格式如：aaa@aa.123且不能超过19位";
    //      }else{
    //        this.remailClass={fail:false}
    //        this.emailMsg="";
    //      }
    //   },
    //验证手机号
    phone() {
      //正则
      let regPhone = /^1[34578]\d{9}$/;
      if (!regPhone.test(this.rphone)) {
        this.PhoneClass = { fail: true };
        this.phoneMsg = "手机号输入的长度不满11位或格式错误";
        return false;
      } else {
        this.PhoneClass = { fail: false };
        this.phoneMsg = "";
        return true;
      }
    },
    //验证码
    code() {
      YzCode(this.rcode).then(data => {
        if (data == 1) {
          this.hCodeClass = { fail: false };
          this.codeMsg = "";
          this.isCode = true;
        } else if (data == 0) {
          this.hCodeClass = { fail: true };
          //  this.codeMsg="验证码错误";
          this.isCode = false;
        }
      });
    },
    //发送验证码
    Fcode() {
      if (this.phone()) {
        fsCode(this.rphone).then(data => {
          if (data == 1) {
            this.$messagebox("提示消息", "发送成功");
            this.setTime();
          }
        });
      } else {
        this.$messagebox("提示消息", "发送失败");
      }
    },
    //倒计时
    setTime() {
      var fcode = document.getElementById("fcode");
      if (this.countTimer == 0) {
        fcode.disabled = "";
        this.codeClass = { failCode: false };
        fcode.value = "获取验证码";
        this.countTimer = 60;
        return false;
      } else {
        fcode.disabled = "disabled";
        this.codeClass = { failCode: true };
        fcode.value = "" + this.countTimer + "s后重新发送";
        this.countTimer--;
      }
      setTimeout(() => {
        this.setTime();
      }, 1000);
    },
    //提交注册
    Regh() {
      if (
        this.name() &&
        this.pwd() &&
        this.hqpwd() &&
        this.phone() &&
        this.isCode == true
      ) {
        Reg(this.rname, this.rpwd, this.rphone).then(data => {
          if (data == 1) {
            // console.log(data);
            this.$router.push("/login");
            this.$messagebox("提示消息", "注册成功");
            //this.$toast("注册成功");
          } else if (data == 0) {
            // //  this.$messagebox("提示消息","注册失败");
            //   this.$toast("注册失败");
          }
        });
        //  this.$messagebox("提示消息","注册成功");
      } else if (this.isCode == false) {
        this.$messagebox("注册失败", "验证码错误");
      } else {
        this.$messagebox("提示消息", "注册失败");
      }
    }
  },
  watch: {
    //监控用户名变量
    rname() {
      this.name();
    },
    //监控密码变量
    rpwd() {
      this.pwd();
    },
    //监控确密码
    qpwd() {
      this.hqpwd();
    },
    //监控手机号
    rphone() {
      this.phone();
    },
    //监控验证码
    rcode() {
      this.code();
    }
  }
};
</script>
<style scoped>
.regContainer {
  width: 100%;
  height: 100vh;
  background: url("/img/1.jpg") no-repeat;
  background: #ccc;
  background-size: cover;
  /* background:rgba(8, 7, 7, 0.1); */
  text-align: center;
  position: fixed;
}
.regFhzy {
  text-align: left;
  padding-left: 4.6%;
  width: 100%;
  color: #8b8a89;
  font-size: 0.8rem;
  height: 2.7rem;
  line-height: 2.7rem;
  /* background:linear-gradient(to left,rgb(245, 214, 129),rgb(250, 231, 123)); */
}
.regFhzy span {
  display: inline-block;
  text-align: left;
  width: 8%;
  font-size: 1rem;
}
.regFhzy span:nth-child(2) {
  width: 80%;
  text-align: center;
}
.regContainer h5 {
  margin-top: 12%;
  /* color: rgb(235, 149, 20); */
  margin-bottom: -6%;
}
.regContainer .reg ul {
  margin-bottom: 8%;
}
.reg {
  width: 100%;
  margin-top: 15%;
}
.reg ul li {
  height: 2.6rem;
}
.reg .regInput input {
  width: 92%;
  height: 2.6rem;
  padding-left: 2%;
  border: 1px solid rgb(231, 229, 229);
  border-radius: 0.3rem;
  outline: 0;
}
.reg .regInput input:hover {
  border: 1px solid rgb(99, 172, 231);
}
/* .reg  #radio{
  margin-left:-60.8%;
}
.reg  #radio input{
  width:7%;
  height:1.0rem;
} */
.reg #code input:nth-child(1) {
  width: 50%;
}
.reg #code input:nth-child(2) {
  width: 38%;
  margin-left: 4%;
  border: 0;
  color: rgb(221, 157, 18);
  background-image: linear-gradient(
    to left,
    rgb(243, 208, 110),
    rgb(250, 231, 123)
  );
}
.reg ul li:not(:first-child) {
  margin-top: 8%;
}
.reg ul li.Reggender {
  margin-bottom: -6%;
}
.regBtn .regTop button {
  width: 92%;
  height: 2.6rem;
  border: 0;
  border-radius: 0.3rem;
  color: #666;
  background-image: linear-gradient(
    to left,
    rgb(110, 163, 243),
    rgb(123, 168, 250)
  );
}
.regBtn .regTop {
  margin-bottom: 5%;
}
.regBtn .regBtn_bottom {
  font-size: 0.8rem;
  color: rgb(17, 17, 16);
}
.regBtn .regBtn_bottom:hover {
  color: red;
}
.regMsg {
  text-align: left;
  padding-left: 3%;
}
/*发送验证码按钮样式 */
.failCode {
  opacity: 0.8;
}
/*错误提示样式 */

.fail {
  width: 92%;
  height: 1.3rem;
  line-height: 1.3rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  margin: 1% auto;
  background-color: rgba(236, 67, 16, 0.5);
  color: rgb(122, 7, 7);
}

.van-nav-bar {
  background-color: transparent;
}
[class*="van-hairline"]::after {
  border: 0 solid transparent;
}
</style>