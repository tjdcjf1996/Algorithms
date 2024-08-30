function solution(a, b, n) {
    if(a>n) return 0;
    
    let newCoke = Math.floor(n/a)*b;
    let haveEmptyBottle = (n%a) + newCoke ;
    
    
    return newCoke + solution(a,b,haveEmptyBottle);
}