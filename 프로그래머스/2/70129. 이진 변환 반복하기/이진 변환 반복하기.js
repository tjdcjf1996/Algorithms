function solution(s) {
    let zero=0;
    let change = 0;
    
    while(parseInt(s) !== 1){
        [...s].reduce((_, cur)=> {if(Number(cur) === 0) zero++;},0);
        s = s.replaceAll('0','');
        s = parseInt(s.length).toString(2)+"";    
        change++;
    }
    
    return [change, zero]
    
    
}