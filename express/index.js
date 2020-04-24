const express=require('express')
// const pool=require('./pool')
const session=require('express-session');
const cors=require('cors');
const history=require('connect-history-api-fallback')

let indexRouter=require("./router/index.js");
let loginRouter=require("./router/login.js");
let orderRouter=require("./router/order.js");
let payRouter=require("./router/pay.js");
let productRouter=require("./router/product.js");
let regRouter=require("./router/reg.js");
let communityRouter=require("./router/community.js");
let userShareRouter=require("./router/share.js");
let evaluationRouter=require("./router/evaluation.js");

let port=5050;
let app=express()
app.use(history());
app.use(cors({
  origin:['http://localhost:8080',
  "http://127.0.0.1:5500",
  "http://176.221.15.50:5500",
  "http://176.221.15.50:8080",
  'http://127.0.0.1:8080',
  "http://192.168.1.100:8080",
  "http://192.168.1.101:8080",
  "http://192.168.1.102:8080",
  "http://192.168.1.100:5050",
  "http://192.168.1.101:5050",
  "http://192.168.1.102:5050",
  "http://192.168.1.3:8080"
],
  credentials:true
}));
app.listen(port,()=>{
  console.log("服务器启动")
})
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60000*1000*300},//过期时间ms
  resave:false,
  saveUninitialized:true
   
}));//将服务器的session，放在req.session中
app.use(express.static("./public"));

app.use("/indexList",indexRouter);
app.use("/userLogin",loginRouter);
app.use("/orderList",orderRouter);
app.use("/payPwd",payRouter);
app.use("/productList",productRouter);
app.use("/regUser",regRouter);
app.use("/communityList",communityRouter);
app.use("/userShareList",userShareRouter);
app.use("/evaluation",evaluationRouter);
