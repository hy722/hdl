import axios from "axios"
//社区互动ajax请求
export function communityOne(pno){
  return new Promise((resolve,reject)=>{
    axios.get("/communityList/community/v1",{params:{
      pno
    }}).then(
      result=>{
        resolve(result.data);
      }
    );
  });
}