//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require("../pool.js");
//创建登录的路由器
const router=express.Router();
//查询订单
router.get("/order/v1/list",(req,res)=>{
    //验证是否登录
    var uid = req.session.uid;
    if(!uid){
        res.send("-1");
        return;
    }
    let pno=req.query.pno,ps=req.query.pageSize;
    //获取参数
    if(!pno){pno=1}
    if(!ps){ps=4}
    let offset=(pno-1)*ps;
    ps=parseInt(ps);
    //创建并保存sql语句
    let sql=`select * from yt_order_info where uid=${uid} LIMIT ${offset},${ps}`;
    pool.query(sql,(err,reslut)=>{
        if(err) throw err;
        res.send(reslut);
        //console.log(reslut);
    });
});
//导出路由器
module.exports=router;