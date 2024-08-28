function gcd(a,b){
    if(b>a) [a,b] = [b,a];
    if(a%b === 0) return b;
    if(a%b !== 0) return gcd(b, a%b);
}

function solution(n, m) {
    const gcdV = gcd(n,m);
    return [gcdV, gcdV*(n/gcdV)*(m/gcdV)];
}