function solution(x, answer = 0) {
    if (x === 1) return answer;
    if (answer >= 500) return -1;
    
    if (x % 2 === 0) {
        return solution(x / 2, answer + 1);
    } else {
        return solution(3 * x + 1, answer + 1);
    }
}