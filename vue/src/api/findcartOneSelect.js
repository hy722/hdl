import axios from "axios"
//查询单个用户的购物车的ajax请求接口
export function selectCartUser(){
  return new Promise((resolve,reject)=>{
    axios.get("/productList/findcart").then(
      result=>{
        resolve(result.data);
      }
    );
  });
}