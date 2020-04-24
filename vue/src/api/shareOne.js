import axios from "axios"
//用户分享专区ajax请求接口
export function shareOne(pno){
  return new Promise((resolve,reject)=>{
    axios.get("/userShareList/users/share/v1",{params:{
      pno//控制显示的条数
    }}).then(
      result=>{
        resolve(result.data);
      }
    );
  });
}