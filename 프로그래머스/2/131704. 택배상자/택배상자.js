function solution(order) {
    let stack = [];  
    let answer = 0;  
    let currentBox = 1;  

    for(let i=0; i<order.length; i++){
        let target = order[i];
        
        while(currentBox <= target){
            stack.push(currentBox);
            currentBox++;
        }
        
        if(order[i] === stack[stack.length-1]){
            stack.pop();
            answer++;
        }else{
            break
        }
    }
    return answer;
}
