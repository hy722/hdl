import axios from "axios"
export function minehead(){
  return new Promise((resolve,reject)=>{
     axios.get("/indexList/minehead").then(result=>{
        resolve(result.data);
     });
  });
}