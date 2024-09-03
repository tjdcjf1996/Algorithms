function solution(lottos, win_nums) {
    const lotto = {
        '6' : 1,
        '5' : 2,
        '4' : 3,
        '3' : 4,
        '2' : 5,
        '1' : 6,
        '0' : 6,
    }
    
    const duplicationCount = lottos.reduce((a,b) => {
        if(win_nums.includes(b)) a+=1;
        return a;
    },0);
    const isZeroCount = lottos.reduce((a,b)=> {
       if(b === 0) a+=1; 
        return a;
    },0);
    
    const result = [lotto[duplicationCount+isZeroCount], lotto[duplicationCount]]
    
    return result
    
}