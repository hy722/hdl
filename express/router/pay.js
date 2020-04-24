//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require("../pool.js");
//创建登录的路由器
const router=express.Router();
//查询支付密码
router.get("/pay",(req,res)=>{
    //获取参数
    var uid = req.session.uid;
    let pupwd=req.query.pupwd;
    //创建并保存sql语句
    let sql="select pid from yt_pay_passwrod_info where uid=? and pupwd=md5(?)"
    //执行sql语句
    pool.query(sql,[uid,pupwd],(err,result)=>{
        if(err) throw  err;
        if(result.length>0){
           res.send("1");
        }else{
           res.send("0"); 
        }
    });
});
//添加支付密码
router.post("/insert/pay",(req,res)=>{
    //获取参数
    var uid = req.session.uid;
    let pupwd=req.body.pupwd;
    //创建并保存sql语句
    var sql=`INSERT INTO xz_login VALUES(null,md5('${pupwd}'),${uid});`

});
//添加订单信息
router.post("/addOrder",(req,res)=>{
    //获取参数并保存在对象中
    let obj={
        oid:null,
        ologo:req.body.ologo,
        otime:req.body.otime,
        oprice:req.body.oprice,
        oaddress:req.body.oaddress,
        cid:req.body.cid,
        uid:req.session.uid
    };
    //创建并保存要执行的sql语句
    let sql="insert into yt_order_info set?";
    //执行sql语句
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