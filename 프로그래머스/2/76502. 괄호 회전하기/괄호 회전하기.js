function isBraket(arr) {
    const closeBraket = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    const stack = [];
    
    for (const braket of arr) {
        if (!closeBraket[braket]) {
            stack.push(braket);
        } else {
            const stackOut = stack.pop(); 
            if (stackOut !== closeBraket[braket]) return false;
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    const sArr = [...s]; 
    
    for (let i = 0; i < s.length; i++) {
        if (isBraket(sArr)) answer++; 
        const firstChar = sArr.shift(); 
        sArr.push(firstChar); 
    }
    
    return answer;
}
