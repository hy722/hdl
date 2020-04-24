import axios from "axios"
//评价功能
export function evaluationOne(qsText,sjText,ytText){
  return new Promise((resolve,reject)=>{
    axios.post("/evaluation/evaluation/v1",{
      qsText,
      sjText,
      ytText
    }).then(result=>{
      resolve(result.data);
    });
  });
}