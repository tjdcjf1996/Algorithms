function solution(numbers, target) {
    let answer = 0;

    for (let i = 0; i < (1 << numbers.length); i++) {
    
        const binary = i.toString(2).padStart(numbers.length, '0').split('').map(Number);  
        const result = binary.reduce((acc, bin, idx) => {
            return acc + (bin === 0 ? -1 : 1) * numbers[idx];
        }, 0);
        
        if (result === target) answer++;
    }
    
    return answer;
}
