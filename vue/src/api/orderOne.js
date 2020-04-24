import axios from "axios"
//订单详情ajxa请求接口
export function orderOneList(pno){
    return new Promise((resolve,reject)=>{
        axios.get("/orderList/order/v1/list",{
          params:{pno}
        }).then(
          result=>{
            resolve(result.data);
          }
        );
    });
}