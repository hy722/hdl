import axios from "axios"
//清空购物请求接口
export function emptyCartOne(cids){
  return new Promise((resolve,reject)=>{
    axios.get("/productList/delItemAll",{
      params:{cids}
    }).then(
      result=>{
        resolve(result.data);
      }
    );
  });
}