function solution(s) {
    var answer = [-1];
    for(let i=1; i<s.length; i++){
        let arr = [];
        let str = s.slice(0,i);
        let idx = str.indexOf(s[i]);
        
        while(idx != -1){
            arr.push(idx);
            idx = str.indexOf(s[i], idx+1);
        }
        
        if(arr.length !== 0){
            let num = arr.pop();
            answer.push(str.length-num);            
        }else{
            answer.push(-1);
        }
    }
    
    return answer;
    
}