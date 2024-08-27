function solution(n) {
    var answer = 0;
    return n % Math.sqrt(n) === 0 ? (Math.sqrt(n)+1)**2 : -1 ;
}