import axios from "axios"
//更新购物车数据ajxa请求接口
export function upcountUserCartOne(pid,count){
  return new Promise((resolve,reject)=>{
     axios.get("/productList/upcount/cart",{params:{
       pid,count
     }}).then(
       result=>{
         resolve(result.data);
       }
     );
  });
}