function gcd(a,b){
    if(a<b) [a,b] = [b,a];
    if(a%b === 0) return b;
    return gcd(b,a%b);
}
function solution(arr) {
    
    const lcm = arr.reduce((acc,cur) => {
       return (acc*cur) / gcd(acc,cur) ;
    });
    return lcm
}