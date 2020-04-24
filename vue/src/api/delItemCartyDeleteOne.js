import axios from "axios"
//删除购物车的内容ajxa请求
export function cartDeleteOne(cid){
   return new Promise((resolve,reject)=>{
     axios.get("/productList/delItem",{params:{
       cid
     }}).then(
       result=>{
         resolve(result.data);
       }
     );
   });
}