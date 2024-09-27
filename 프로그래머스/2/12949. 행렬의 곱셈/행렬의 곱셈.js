function solution(arr1, arr2) {
    var answer = [];
    
    arr1.forEach((row,i)=>{
        const column = 0;
        const arr = [];
        for(let i=0; i<arr2[0].length; i++){
            let data = [];
            data = row.map((element, idx) => element * arr2[idx][i] )
            arr.push(data.reduce((acc,cur)=>acc+cur,0));
        }
        answer.push(arr);
    })
    
    return answer;
}