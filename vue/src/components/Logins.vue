<template>
  <div class="login">
    <!-- 输入内容区域 -->
    <!-- 添加一个返回按钮 -->
    <div @click="loginIndex"></div>

    <div class="topz">
      <input
        class="input1"
        placeholder="请输入用户名"
        type="text"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入用户名'"
        v-model="uname"
      />
      <br />
      <input
        class="input1"
        placeholder="请输入密码"
        type="password"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='请输入密码'"
        v-model="upwd"
      />
      <br />
      <button
        :class="(uname=='' || upwd=='') ?'button1':'button2'"
        :disabled="(uname=='' || upwd=='') ?true:false"
        @click="loginUser"
      >
        <img src="/img/jianto.png"/>
      </button>
    </div>
    <!-- 底部忘记密码区域 -->
    <div class="bott">
      <div>
        <a @click="onCancel()">忘记密码</a>
        <span>|</span>
        <a @click="loginRegj">用户注册</a>
      </div>
      <div class="bottm">
        登录即代表阅读并同意
        <a>服务协议</a>
      </div>
    </div>
    <!-- 忘记密码弹出框 -->
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" />
  </div>
</template>
<script>
import { logins } from "../api/login.js";
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      unameClass: { fails: false },
      upwdClass: { fails: false },
      unameMsg: "",
      upwdMsg: "",
      userName: "",
      show: false,
      actions: [{ name: "找回密码" }, { name: "短信验证登录" }]
    };
  },
  methods: {
    //跳转到首页
    loginIndex() {
      this.$router.push("/");
    },
    // 忘记密码弹出框
    onCancel() {
      this.show = true;
    },
    //跳转到注册界面
    loginRegj() {
      this.$router.push("/reg");
    },
    //验证用户名
    unames() {
      //验证的正则表达式，不能以数字和各种符号开头，且长度为4~7位
      let uName = /(^[^~`!@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'\<,\>\.\?\/0-9])[a-zA-Z0-9_\u4e00-\u9fa5]{3,6}$/;
      //验证是否为空
      if (this.uname == "") {
        this.unameClass = { fails: true };
        this.unameMsg = "用户名不能为空";
        return false;
      } else if (!uName.test(this.uname)) {
        //验证是否满足正则表达式的要求
        this.unameClass = { fails: true };
        this.unameMsg = "不能以数字和各种符号开头，且长度为4~7位";
        return false;
      } else {
        this.unameClass = { fails: false };
        this.unameMsg = "";
        return true;
      }
    },
    //验证密码
    upwds() {
      //必须包含一个大写和小写字母,长度为6~18位
      let uPwd = /^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*?]{5,17}$/;
      if (this.upwd == "") {
        this.upwdClass = { fails: true };
        this.upwdMsg = "密码不能为空";
        return false;
      } else if (!uPwd.test(this.upwd)) {
        this.upwdClass = { fails: true };
        this.upwdMsg = "必须包含一个大写和小写字母,长度为6~18位";
        return false;
      } else {
        this.upwdClass = { fails: false };
        this.upwdMsg = "";
        return true;
      }
    },
    //登录提交用户信息
    updateName(Name) {
      this.$store.commit("updateUserName", this.Name);
    },
    loginUser() {
      if (this.unames() && this.upwds()) {
        logins(this.uname, this.upwd).then(data => {
          console.log(data.data);
          if (data.code == 1) {
            //  this.$messagebox("提示消息","登录成功");
            this.$router.push("/");
            //  this.userName=data.data;

            //  this.updateName(data.data);
          } else if (data == 0) {
            this.$messagebox("提示消息", "登录失败,用户名或密码输入错误");
          }
        });
      } else {
        this.$messagebox("提示消息", "登录失败,用户名或密码输入错误");
      }
    }
  },
  watch: {
    uname() {
      this.unames();
    },
    upwd() {
      this.upwds();
    }
  }
};
</script>
 
<style scoped>
/* @import url();
 引入公共css类 */
.login {
  background: url("/img/5.jpg") no-repeat center;
  background-size: cover;
  position: absolute;
  width: 100%;
  min-height: 100%;
  text-align: center;
}
.topz {
  padding-top: 10rem;
}
.input1 {
  text-align: center;
  width: 81%;
  height: 2.8rem;
  border: 0;
  margin-bottom: 1rem;
  background-color: #f0f4f7;
  border-radius: 1.5rem;
  /* color: lawngreen;
     */
  caret-color: #00c9ee;
}
/* 输入框光标颜色 */
input::placeholder {
  color: #b4b7be;
}
/* 不能点击的按钮样式 */
.button1 {
  background-color: #f0f4f7;
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0;
  text-align: center;
}
/* 可点击的按钮样式 */
.button2 {
  background-color: #48b0ff;
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0;
  text-align: center;
}
/* 底部内容 */
.bott {
  margin-top: 6rem;
  text-align: center;
  /* transform: translate(-50%, -50%); */
  font-size: 0.7rem;
  color: #8f8e94;
}
.bott a {
  color: #000;
  font-weight: 600;
}
.bott span {
  margin: 0 8%;
}
.bottm {
  margin-top: 0.5rem;
}


</style> 