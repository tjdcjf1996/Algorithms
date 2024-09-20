function solution(n) {
    const obj = { 1:1,2:2 }
    
    for(let i=3; i<=n; i++){
        if(!obj[i])
            obj[i] = (obj[i-1] + obj[i-2])%1234567;
    }
    
    return obj[n];
}