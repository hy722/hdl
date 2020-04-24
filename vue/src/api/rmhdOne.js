import axios from "axios"
export function rmhdOne(pno){
  return new Promise((resolve,reject)=>{
      axios.get("/indexList/rmhd/v1",{params:{
        pno
      }}).then(
        result=>{
          resolve(result.data);
        }
      );
  });
}
