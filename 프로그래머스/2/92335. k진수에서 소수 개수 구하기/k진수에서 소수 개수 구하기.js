function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    
    const nToK = n.toString(k).split('0');
    
    nToK.forEach(num => {
        if (num !== '' && isPrime(parseInt(num))) {
            answer++;
        }
    });
    
    return answer;
}
