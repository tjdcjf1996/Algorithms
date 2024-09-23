function solution(elements) {
    const sumSet = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        let sum = 0;
        for (let start = 0; start < elements.length; start++) {
            for (let j = 0; j < i; j++) { 
                sum += elements[(start + j) % elements.length]; 
            }
            sumSet.add(sum);
            sum = 0; 
        }
    }
    
    return sumSet.size;
}
