//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require('../pool')
//创建登录的路由器
const router=express.Router();
router.post("/evaluation/v1",(req,res)=>{
   //获取参数
   var uid =req.session.uid;
   var uname =req.session.uname;
  //创建对象保存获取的参数
  let obj={
      eid:null,
      qsText:req.body.qsText,
      sjText:req.body.sjText,
      ytText:req.body.ytText,
      uname:uname,
      uid:uid
  };
  //创建并保存要执行的sql语句
  //创建并保存sql
  let sql="insert into yt_evaluation set?";
  //执行SQL语句
  pool.query(sql,[obj],(err,result)=>{
      if(err) throw err;
      if(result.affectedRows>0){
         res.send("1");
      }else{
         res.send("0");
      }
  });
});

//导出路由器
module.exports=router;