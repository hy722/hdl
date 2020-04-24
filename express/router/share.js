//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require("../pool.js");
//创建登录的路由器
const router=express.Router();
//社区消息发布
router.get("/users/share/v1",(req,res)=>{
   //获取参数pno
   let pno=req.query.pno,ps=req.query.pageSize;
   //获取参数，控制每页显示条数
   if(!pno){pno=1}
   if(!ps){ps=6}
   let offset=(pno-1)*ps;
   ps=parseInt(ps);
  //创建并保存sql语句
  let sql="select * from yt_user_share LIMIT ?,?";
  pool.query(sql,[offset,ps],(err,reslut)=>{
    if(err) throw err;
    res.send(reslut);
  });
});

//导出路由器
module.exports=router;