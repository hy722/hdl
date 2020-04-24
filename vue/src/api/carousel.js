import axios from "axios"
//轮播图1
export function carouseOne(){
   return new Promise((resolve,reject)=>{
      axios.get("/indexList/carousel").then(
        result=>{
          resolve(result.data);
        }
      );
   });
}