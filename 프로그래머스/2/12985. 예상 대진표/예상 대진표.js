function solution(n, a, b) {
    let round = 1;
    
    while (true) {
        // a와 b가 같은 라운드에서 만나는지 확인
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        
        // 만약 두 번호가 같다면 그 라운드에서 만난다
        if (a === b) {
            break;
        }
        
        round++;
    }
    
    return round;
}
