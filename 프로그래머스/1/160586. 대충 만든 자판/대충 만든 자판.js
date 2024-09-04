function solution(keymap, targets) {
    const keymapList = [];
    const answer = [];
    
    keymap.forEach(keyStr=>{
        [...keyStr].forEach((keyChr, i) => {
            if(!keymapList[keyChr]){
                keymapList[keyChr] = i+1;
            }else{
                keymapList[keyChr] = Math.min(keymapList[keyChr],i+1);
            }
        });
    });
    
    targets.forEach(target => {
        let sum = 0;
        
        for(targetChr of target){
            if(!keymapList[targetChr]){
                sum = -1;
                break;
            }
            sum += keymapList[targetChr];
        }
        answer.push(sum);
        })
        
       
    
    return answer;
}