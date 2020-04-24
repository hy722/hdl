//引入express模块
const express=require("express");
//引入数据库连接池
const pool=require("../pool.js");
//创建登录的路由器
const router=express.Router();
//导出路由器
//商品详情
router.get("/product",(req,res)=>{
    //验证是否登录
    var uid = req.session.uid;
    if(!uid){
        res.send("-1");
        return;
    }
    let pno=req.query.pno,ps=req.query.pageSize;
    //获取参数
    if(!pno){pno=1}
    if(!ps){ps=26}
    let offset=(pno-1)*ps;
    ps=parseInt(ps);
   //创建并保存sql语句
   let sql="select * from yt_product_info LIMIT ?,?";
   pool.query(sql,[offset,ps],(err,reslut)=>{
     if(err) throw err;
     res.send(reslut);
     //res.send(1);
   });
});
//商品详情随时更新数量
router.get("/productCount/v1",(req,res)=>{
    var uid = req.session.uid;
    if(!uid){
        res.send("-1");
        return;
    }
    let bid=req.query.bid,$count=req.query.count,pid=req.query.pid;
    let sql=`update yt_product_info set productCount=${$count} where pid=${pid} and bid=${bid}`;
    //创建sql
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        //console.log(result);
        if(result.affectedRows==1){
            res.send("1");
        }else{
            res.send("0");
        }

    });

});
//添加到购物车
router.get("/addCart",(req,res)=>{
      //验证是否登录
      var uid = req.session.uid;
      var uname=req.session.uname;
      if(!uid){
        res.send("-1");
        return;
      }
      // 获取参数
     let pid=req.query.pid,pname=req.query.pname,price=req.query.price,
       pimg=req.query.pimg,pweight=req.query.pweight;          
     //创建sql
     let sql="select cid from yt_cart_info where uid=? and pid=?";
     pool.query(sql,[uid,pid],(err,result)=>{
         if(err) throw err;
         if(result.length>0){
            var sql=`update yt_cart_info set  count=count+1 where uid=${uid} and pid=${pid}`;
         }else{
            var sql=`insert into yt_cart_info values(null,'${pimg}',${pweight},${price},'${pname}',1,${pid},${uid})`;
         }
         pool.query(sql,(err,result)=>{
             if(err) throw err;
             //console.log(result);
             res.send("1");
        
         });
    });
});
//根据用户查询uid 查询属于自己的购物车
router.get("/findcart",(req,res)=>{
    // 1.获取登录凭证uid
    var uid=req.session.uid;
    // // 2.如果uid不存在，请登录
    // if(!uid){
    //     res.send("-1");
    //     return;
    // }
    // 3.创建sql语句
    let sql="select *from yt_cart_info where uid=?"
    // 4.执行sql语句
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        // 5.发送结果
        res.send(result);
        // if(result.length>0){

        // }else{
        //     res.send("0");
        // }
    });
});
//删除单个商品
router.get("/delItem",(req,res)=>{
    //获取参数
    let cid=req.query.cid,uid=req.session.uid;
    //判断是否登录，若登录成功执行后续代码
    if(!uid){
        res.send("-2");
        return;
    }
    let sql="delete from yt_cart_info where cid=? and uid=?"
    //执行sql
    pool.query(sql,[cid,uid],(err,result)=>{
        if(err) throw err;
        //affectedRows
        //自增长id列的重新排序
        if(result.affectedRows>0){
            dropsql().then(addsql);
        }
        if(result.affectedRows>0){
            res.send("1"); 
        }
        else{
            res.send("0");
        }
    });
});
//删除多个商品
router.get("/delItemAll",(req,res)=>{
    // 获取uid判断是否登录
    let uid=req.session.uid;
    if(!uid){
        res.send("-1");
        return;
    }
    // 获取idsm,删除选中的ID列表
    let cids=req.query.cids;
    // 删除
    let sql=`delete from yt_cart_info where cid in(${cids})`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        //自增长id列的重新排序
        if(result.affectedRows>0){
            dropsql().then(addsql);
        }
        if(result.affectedRows>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });

});
//随时更新数量
router.get("/upcount/cart",(req,res)=>{
    var uid = req.session.uid;
    if(!uid){
        res.send("-1");
        return;
    }
    let pid=req.query.pid,$count=req.query.count;
    let sql=`update yt_cart_info set count=${$count} where uid=${uid} and pid=${pid}`;
    //创建sql
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result)
        //console.log(result);
        if(result.affectedRows==1){
            res.send("1");
        }else{
            res.send("0");
        }

    });

});
//查询购物车的数量
router.get("/porductCartCount",(req,res)=>{
    //获取参数
    let uid=req.session.uid;
    let sql=`select count from yt_cart_info where uid=${uid}`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        res.send(result);
    });
});
module.exports=router;
//自增列ID主键重新排序的方法
function dropsql(){
    return new Promise(
        function(door){
            let dropsql="ALTER  TABLE yt_cart_info DROP cid";
            pool.query(dropsql,(err,result)=>{
                if(err) throw err;
                door();
            });
        }
    );
}
function addsql(){
    return new Promise(
        function(door){
            let addsql="ALTER TABLE yt_cart_info  ADD cid int PRIMARY KEY NOT NULL AUTO_INCREMENT FIRST";
            pool.query(addsql,(err,result)=>{
                if(err) throw err;
                door();
            });
        }
    );
}