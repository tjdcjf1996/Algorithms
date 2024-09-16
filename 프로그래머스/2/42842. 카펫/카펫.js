function solution(brown, yellow) {
    const sum = brown + yellow;
    const x = [];
    const y = [];
   
    // x 구하기
    for(let i=1; i<=Math.sqrt(sum); i++ ){
        if( sum % i === 0 ){
          x.push(sum/i);
          y.push(i);
        }    
    }
    for(let i=0; i<x.length; i++){
        const yellowCount = (x[i]-2) * (y[i]-2);
        if(yellowCount === yellow) return [x[i],y[i]];
    }
    
}