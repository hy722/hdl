import axios from "axios"
//加入购物车
export function productAddCartOne(pid,pname,price,pimg,pweight){
   return new Promise((resolve,reject)=>{
     axios.get("/productList/addCart",{params:{
      pid,pname,price,pimg,pweight
     }}).then(result=>{
       resolve(result.data);
     });
   });
}