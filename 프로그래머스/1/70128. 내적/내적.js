function solution(a, b) {
    let sum = 0;
    a.forEach((n,i)=>{
        sum += n*b[i];
    })
    return sum;
}