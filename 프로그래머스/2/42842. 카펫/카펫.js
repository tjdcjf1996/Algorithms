function solution(brown, yellow) {
    const sum = brown + yellow;
    
    // 가로와 세로 길이 
    for (let i = 1; i <= Math.sqrt(sum); i++) {
        if (sum % i === 0) {
            const x = sum / i;  // 가로
            const y = i;       // 세로
            
            // 타일의 갯수가 맞는지 확인
            const yellowCount = (x - 2) * (y - 2);
            if (yellowCount === yellow) {
                return [x, y];
            }
        }
    }
}
