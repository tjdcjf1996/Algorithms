function solution(k, m, score) {
    const appleTotalArr = score.sort((a,b) => b-a);
    const leng = appleTotalArr.length;
    let total = 0;
    for(let i=0; i< leng-(leng%m); i+=m){    
        total += appleTotalArr[i+m-1] * m;
    }
    return total;
}