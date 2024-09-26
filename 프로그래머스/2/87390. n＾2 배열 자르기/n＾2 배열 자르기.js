function solution(n, left, right) {
    const answer = [];
    for(;left<=right;left++){
        answer.push(Math.max(Math.floor(left/n),left%n)+1);
    }
    return answer;
}