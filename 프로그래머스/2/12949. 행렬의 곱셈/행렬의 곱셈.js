function solution(arr1, arr2) {
    var answer = [];
    
    arr1.forEach((row,i)=>{
        const column = 0;
        const arr = [];
        for(let i=0; i<arr2[0].length; i++){
            arr.push(row.reduce((acc,cur,idx) => acc+(cur*arr2[idx][i]),0))
        }
        answer.push(arr);
    })
    
    return answer;
}