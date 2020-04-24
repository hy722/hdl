//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require('../pool')
//创建登录的路由器
const router=express.Router();
//管理员登录ajax请求路径接口
router.get("/admin/login",(req,res)=>{
   //获取参数
   let aname=req.query.aname,
       apwd=req.query.aname;
   //创建并保存sql
   let sql="select aid from yt_admin where aname=? and apwd=md5(?)";
   pool.query(sql,[aname,apwd],(err,result)=>{
     if(err) throw err;
     if(result.length>0){
       //用于验证是否为管理员
        res.session.aid=result[0].aid;
        res.send(1);//登录成功
     }else{
        res.send(0);//登录失败
     }
   });    

});

// 自己添加的
router.get('/user',(req,res)=>{
   pool.query('SELECT * FROM yt_user_share',(err,result )=>{
       if(err)throw err;
       res.set('Access-Control-Allow-Origin','*')
       res.json(result)
   })
})


//导出路由器
module.exports=router;