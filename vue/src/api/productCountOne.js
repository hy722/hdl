import axios from "axios"
//更新数量
export function productCountOne(bid,pid,count){
   return new Promise((resolve,reject)=>{
      axios.get("/productList/productCount/v1",{params:{
        bid,pid,count
      }}).then(result=>{
        resolve(result.data);
      });
   });
}