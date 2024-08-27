function solution(x) {
    return (x % (x+"").split("").reduce((a,b)=>a*1+b*1)) === 0 ? true:false;
}