import axios from "axios"
//支付接口
export function userPayOne(pupwd){
  return new Promise((resolve,reject)=>{
    axios.get("/payPwd/pay",{params:{
      pupwd
    }}).then(
      result=>{
        resolve(result.data);
      }
    );
  });
}