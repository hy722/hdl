import axios from "axios"
//店铺详情
export function businessOne(pno){
  return new Promise((resolve,reject)=>{
     axios.get("/indexList/business",{params:{pno}}).then(
       reslut=>{
         resolve(reslut.data);
       }
     );
  });
}