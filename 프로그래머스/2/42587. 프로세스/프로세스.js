function solution(priorities, location) {
    const processArr = priorities.reduce((acc,priority,idx) => {
        acc.push([priority,65+idx]);
        return acc;
    },[]);
    let number = 0;
    while(processArr.length>0){
        const maxPriority = Math.max(...processArr.map(item => item[0]));
        const temp = processArr.shift();
        if(temp[0] === maxPriority && temp[1] === 65+location){
            number ++;
            return number;
        }else if(temp[0] === maxPriority){
            number ++;
            
        }else{
            processArr.push(temp)
        }
        
    }
    
}