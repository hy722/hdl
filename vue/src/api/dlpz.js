import axios from "axios"
export function dlyz(){
  return new Promise((resolve,reject)=>{
     axios.get("/indexList/indexhead").then(result=>{
        resolve(result.data);
     });
  });
}