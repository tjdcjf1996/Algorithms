function solution(arr, divisor) {
    var answer = [];
    for(a of arr){
        if(a%divisor === 0) answer.push(a);
    }
    
    
    return answer.length===0 ? [-1] : answer.sort((a,b)=>{return a-b});
}
console.log("백준 커밋용 수정");