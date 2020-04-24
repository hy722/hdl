import axios from "axios"
//商品详情
export function Produ(pno){
  return new Promise((resolve,reject)=>{
    axios.get("/productList/product",{params:{
      pno
    }}).then(
      result=>{
        resolve(result.data);
      }
    );
  });
}