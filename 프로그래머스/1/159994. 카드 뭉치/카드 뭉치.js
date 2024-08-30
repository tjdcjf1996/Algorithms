function solution(cards1, cards2, goal) {
    var num = goal.length;
    
    for(let i=0; i<num; i++){
        if(goal.length>0 && cards1.length>0 && cards1[0]===goal[0]){
            cards1.shift();
            goal.shift();    
        }
        else if(goal.length>0 && cards2.length>0 && cards2[0]===goal[0]){
            cards2.shift();
            goal.shift();    
        }
      
        
    }
    
    return goal.length===0 ? "Yes" : "No";
}