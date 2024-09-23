function solution(elements) {
    const sumSet = new Set();
    
    for(let i=1; i<=elements.length; i++){ 
        let start = 0;
        let sum = 0;
        while(start<elements.length){
            for(let j=0; j<i; j++){
                sum += elements[(start+j)%(elements.length)];
            }
            start ++;
            sumSet.add(sum);
            sum = 0;
        }
    }
    
    const answer = [...sumSet].length;

    return answer;
    
}