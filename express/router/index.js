//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require('../pool')
//创建登录的路由器
const router=express.Router();
//首页信息ajax请求路径
router.get("/business",(req,res)=>{
    //验证是否登录
    // var uid = req.session.uid;
    // var uname=req.session.uname;
    // if(!uid){
    //   res.send("-1");
    //   return;
    // }
    //获取参数pno
    let pno=req.query.pno,ps=req.query.pageSize;
    //获取参数
    if(!pno){pno=1} //当前页码
    if(!ps){ps=4}//每页显示的数据量
    let offset=(pno-1)*ps; //开始查询的值
    ps=parseInt(ps);
   //创建并保存sql语句
   let sql="select * from yt_business_info LIMIT ?,?";
   pool.query(sql,[offset,ps],(err,reslut)=>{
     if(err) throw err;
     if(reslut.length>0){
     res.send(reslut);
     }else{
       res.send(-1)
     }
   });
});
//热门活动数据
router.get("/rmhd/v1",(req,res)=>{
    //获取参数pno
    let pno=req.query.pno,ps=req.query.pageSize;
    //获取参数
    if(!pno){pno=1}
    if(!ps){ps=3}
    let offset=(pno-1)*ps;
    ps=parseInt(ps);
   //创建并保存sql语句
   let sql="select * from yt_rmhd LIMIT ?,?";
   pool.query(sql,[offset,ps],(err,reslut)=>{
     if(err) throw err;
     res.send(reslut);
   });
});
//登录凭证
router.get("/indexhead",(req,res)=>{
   var uid = req.session.uid;
   var uname=req.session.uname;
   var uvip=req.session.uvip; 
  // var uid=localStorage.getItem("uid");
  // var uname=localStorage.getItem("uname");
  // var uvip=localStorage.getItem("uvip");
   if(!uid){
     res.send("-1");
   }else{
    res.send({name:uname,vips:uvip});
   }   
});
//mine登录凭证
router.get("/minehead",(req,res)=>{
  var uid =req.session.uid;
  var uname =req.session.uname;
  var uvip =req.session.uvip;
  var timg =req.session.timg;
  // var uid=localStorage.getItem("uid");
  // var uname=localStorage.getItem("uname");
  // var uvip=localStorage.getItem("uvip");
  // var timg=localStorage.getItem("timg");
  if(!uid){
    res.send("-1");
  }else{
    res.send({name:uname,vips:uvip,timgs:timg})
  }
});
//是否登录
router.get("/denglu",(req,res)=>{
  //var uid=localStorage.getItem("uid");
  var uid =req.session.uid;
  if(!uid){
    res.send("-1");
  }else{
    res.send("1")
  }
});
//轮播图数据ip1---第一处轮播图
router.get("/carousel",(req,res)=>{
    //创建并保存sql语句
    let sql="select cimg from yt_carousel where cbj='ip2'";
    //执行sql语句
    pool.query(sql,(err,result)=>{
        if(err) throw err;
         res.send(result);
    });
});
//导出路由器
module.exports=router;