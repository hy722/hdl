import axios from "axios"
//注销功能
export function zhuLoginOne(){
  return new Promise((resolve,reject)=>{
    axios.get("/userLogin/zhuLogin").then(
      result=>{
        resolve(result.data);
      }
    );
  });
}