function solution(k, score) {
    let arr = [];
    let answer = [];
    score.forEach(s => {
        
        
            arr.push(s);
            arr = arr.sort((a,b)=>b-a);
            if( arr.length === k+1 ) arr.pop();
            answer.push(arr[arr.length-1]);
        
    })
    return answer;
}