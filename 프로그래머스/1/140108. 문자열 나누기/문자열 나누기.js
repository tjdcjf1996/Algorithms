function solution(s) {
    let cutNum = 0;
    s = [...s];
    while(s.length>0){
        const first = s[0];
        let cntFirst = 1;
        let cntOther = 0;
        let i=1
        for(; i<s.length; i++){
            if(s[i] === first){
              cntFirst ++;  
            }else{
              cntOther ++;
            }
            if(cntFirst === cntOther || i === s.length-1){
                break;
            } 
        }
        s.splice(0,i+1);
              cutNum ++;
    }
    return cutNum;
}