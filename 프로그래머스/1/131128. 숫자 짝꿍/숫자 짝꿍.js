// function solution(X, Y) {
//     let origin = [...Y];
//     const duplicationArr = [];
//     [...X].forEach((n)=>{
//         if(origin.indexOf(n)!==-1){
//             duplicationArr.push(n);
//             origin.splice(origin.indexOf(n),1);
//         }
//     })
    
//     if(duplicationArr.length === 0) return "-1";
//     if(duplicationArr.reduce((a,b)=>a+parseInt(b),0) === 0) return "0";
    
//     duplicationArr.sort((a,b)=>b-a);
   
//     return duplicationArr.join("");
// }
// 시간 초과

function solution(X, Y) {
    const ycount = [];
    const duplicationArr = [];
    
    [...Y].forEach((n)=>{
        ycount[n] = (ycount[n] || 0) + 1;
    });
        
    [...X].forEach((n)=>{
        if(ycount[n]){
            duplicationArr.push(n);
            ycount[n]--;
        }
    })
    
    if(duplicationArr.length === 0) return "-1";
    if(duplicationArr.reduce((a,b)=>a+parseInt(b),0) === 0) return "0";
    
    duplicationArr.sort((a,b)=>b-a);
   
    return duplicationArr.join("");
}