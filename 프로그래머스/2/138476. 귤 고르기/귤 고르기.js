function solution(k, tangerine) {
    
    let answer = 0;
    const sizeCnt = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    },{})
    
    const sortedCnt = Object.values(sizeCnt).sort((a,b)=>b-a);
    
    for(const count of sortedCnt){
        if(k<=0) break;
        k -= count;
        answer++;
    }
    
    return answer;
}