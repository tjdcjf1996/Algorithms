function solution(numbers) {
    const setArr = new Set();
    for(let i=0; i<numbers.length-1; i++){
        let cnt= i+1;
        while(cnt<numbers.length){
            setArr.add(numbers[i]+numbers[cnt]);
            cnt++;
        }
    }
    return [...setArr].sort((a,b)=>a-b);
}