import axios from "axios"
export function denglu(){
  return new Promise((resolve,reject)=>{
     axios.get("/indexList/denglu").then(result=>{
        resolve(result.data);
     });
  });
}